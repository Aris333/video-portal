<?php

namespace App\Http\Tools;

use App;
use App\Share;
use App\FileManagerFile;
use App\FileManagerFolder;
use App\Http\Requests\FileFunctions\RenameItemRequest;
use App\User;
use App\FileVersion;
use Aws\Exception\MultipartUploadException;
use Aws\S3\MultipartUploader;
use Carbon\Carbon;
use FFMpeg;
use FFMpeg\Format\Video\X264;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use Lakshmaji\Thumbnail\Facade\Thumbnail;
use Symfony\Component\HttpKernel\Exception\HttpException;


class Editor
{
    /**
     * Create new directory
     *
     * @param $request
     * @param null $shared
     * @return FileManagerFolder|\Illuminate\Database\Eloquent\Model
     */
    public static function create_folder($request, $shared = null)
    {
        // Get variables
        $user_scope = is_null($shared) ? $request->user()->token()->scopes[0] : 'editor';
        $name = $request->has('name') ? $request->input('name') : 'New Folder';
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;
        $unique_id = get_unique_id();

        // Create folder
        $folder = FileManagerFolder::create([
            'parent_id' => $request->parent_id,
            'unique_id' => $unique_id,
            'user_scope' => $user_scope,
            'user_id' => $user_id,
            'type' => 'folder',
            'name' => $name,
        ]);

        // Return new folder
        return $folder;
    }

    /**
     * Rename item name
     *
     * @param RenameItemRequest $request
     * @param $unique_id
     * @param null $shared
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public static function rename_item($request, $unique_id, $shared = null)
    {
        // Get user id
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        // Get item
        $item = get_item($request->type, $unique_id, $user_id);

        // Rename item
        $item->update([
            'name' => $request->name
        ]);

        // Return updated item
        return $item;
    }

    /**
     * Delete file or folder
     *
     * @param $request
     * @param $unique_id
     * @param null $shared
     * @throws \Exception
     */
    public static function delete_item($request, $unique_id, $shared = null)
    {
        // Get user id
        $user = is_null($shared) ? Auth::user() : User::findOrFail($shared->user_id);

        // Delete folder
        if ($request->input('data.type') === 'folder') {

            // Get folder
            $folder = FileManagerFolder::withTrashed()
                ->with(['folders'])
                ->where('user_id', $user->id)
                ->where('unique_id', $unique_id)
                ->first();

            // Get folder shared record
            $shared = Share::where('user_id', $user->id)
                ->where('type', '=', 'folder')
                ->where('item_id', $unique_id)
                ->first();

            // Delete folder shared record
            if ($shared) {
                $shared->delete();
            }

            // Force delete children files
            if ($request->input('data.force_delete')) {

                // Get children folder ids
                $child_folders = filter_folders_ids($folder->trashed_folders, 'unique_id');

                // Get children files
                $files = FileManagerFile::onlyTrashed()
                    ->where('user_id', $user->id)
                    ->whereIn('folder_id', Arr::flatten([$unique_id, $child_folders]))
                    ->get();

                // Remove all children files
                foreach ($files as $file) {

                    // Delete file
                    Storage::delete('/file-manager/' . $file->basename);

                    // Delete thumbnail if exist
                    if (!is_null($file->thumbnail)) Storage::delete('/file-manager/' . $file->getRawOriginal('thumbnail'));

                    // Delete file permanently
                    $file->forceDelete();
                }

                // Delete folder record
                $folder->forceDelete();
            }

            // Soft delete items
            if (!$request->input('data.force_delete')) {

                // Remove folder from user favourites
                $user->favourite_folders()->detach($unique_id);

                // Soft delete folder record
                $folder->delete();

                // deleting the team aginst this fodler
                $team = App\Team::where('folder_id', $folder->id)->first();
                if ($team) {
                    $team->delete();
                }
            }
        }

        // Delete item
        if ($request->input('data.type') !== 'folder') {

            // Get file
            $file = FileManagerFile::withTrashed()
                ->where('user_id', $user->id)
                ->where('unique_id', $unique_id)
                ->first();

            // Get folder shared record
            $shared = Share::where('user_id', $user->id)
                ->where('type', '=', 'file')
                ->where('item_id', $unique_id)
                ->first();

            // Delete file shared record
            if ($shared) {
                $shared->delete();
            }

            // Force delete file
            if ($request->input('data.force_delete')) {

                // Delete file
                Storage::delete('/file-manager/' . $file->basename);

                // Delete thumbnail if exist
                if ($file->thumbnail) Storage::delete('/file-manager/' . $file->getRawOriginal('thumbnail'));

                // Delete file permanently
                $file->forceDelete();
            }

            // Soft delete file
            if (!$request->input('data.force_delete')) {

                // Soft delete file
                $file->delete();
            }
        }
    }

    /**
     * Move folder or file to new location
     *
     * @param $request
     * @param $unique_id
     * @param null $shared
     */
    public static function move($request, $unique_id, $shared = null)
    {
        // Get user id
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        if ($request->from_type === 'folder') {

            // Move folder
            $item = FileManagerFolder::where('user_id', $user_id)
                ->where('unique_id', $unique_id)
                ->firstOrFail();

            $item->update([
                'parent_id' => $request->to_unique_id
            ]);

        } else {

            // Move file under new folder
            $item = FileManagerFile::where('user_id', $user_id)
                ->where('unique_id', $unique_id)
                ->firstOrFail();

            $item->update([
                'folder_id' => $request->to_unique_id
            ]);
        }
    }

    public static function makeVersion($request, $unique_id, $parent_file_id, $shared = null)
    {
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        // Make file parent
        $item = FileManagerFile::where('user_id', $user_id)
            ->where('unique_id', $unique_id)
            ->firstOrFail();
        $parent = FileManagerFile::where('user_id', $user_id)
            ->where('unique_id', $parent_file_id)
            ->firstOrFail();
        $grand_id = 0;
        if ($parent->parent_id == 0) {
            $item->update([
                'parent_id' => $parent_file_id,
            ]);
            $grand_id = $parent_file_id;
        } else {
            $grand_id = $parent->parent_id;
            $item->update([
                'parent_id' => $parent->parent_id,
            ]);
        }
        $parent_item_exist = App\FileVersion::where('section_id', $parent_file_id)
            ->orWhere('file_id', $parent_file_id)
            ->first();

        if (!$parent_item_exist) {

            App\FileVersion::create([
                'section_id' => $parent_file_id,
                'file_id' => $parent_file_id,
            ]);
        }

        App\FileVersion::create([
            'section_id' => $grand_id,
            'file_id' => $unique_id,
        ]);
    }

    public static function oldmakeVersion($request, $unique_id, $parent_file_id, $shared = null)
    {
        $test = 1;
        $grand_parent = null;

        $file = FileManagerFile::where('unique_id', $unique_id)->first();

        $grand_parent_list = $file->self_parent;
        //dd($grand_parent_list, $file,$parent_file_id,$unique_id);
        if ($file->self_parent) {
            $grand_parent_list_lenght = count((array)$file->self_parent);

            for ($i = 0; $i < $grand_parent_list_lenght; $i++) {
                if ($grand_parent_list->parent_id === 0) {
                    $grand_parent = $grand_parent_list->parent_id;
                }
            }
        }


        //   dd($grand_parent);
        //        while ($test != 0)
        //        {
        //            $query = FileManagerFile::where('unique_id',$parent_file_id)->first();
        //            while($test==100){
        //                $next =  FileManagerFile::where('unique_id',$query->parent_id)->first();
        //                if($next->parent_id == 0)
        //                {
        //                    $grand_parent = $next->unique_id;
        //                    break;
        //                }
        //                $test++;
        //            }
        //            dd($grand_parent,$query->unique_id);
        //        }
        //dd($request->all(), $unique_id, $parent_file_id, $shared = null);
        // Get user id
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        //from represent the item which is drop
        //to represent the item on which item is drop

        $parent = $request->from_unique_id;
        $parent_id = FileManagerFile::where('unique_id', $request->to_unique_id)
            ->where('parent_id', '!=', 0)->first();
        $version_check = FileVersion::where('section_id', $request->to_unique_id)
            ->orWhere('file_id', $request->to_unique_id)->first();


        $tesing = FileManagerFile::where('unique_id', $parent_file_id)->first();

        //        dd($parent_id,$version_check,$parent, $request->to_unique_id,$request->input());
        if ($parent_id || $version_check) {
            if ($version_check) {
                $parent = $version_check->section_id;
            } elseif ($parent_id) {
                $parent = $parent_id->parent_id;

            }
            $parent_id_found = App\FileManagerFile::where('parent_id', $parent)
                ->first();

            $tesing = FileManagerFile::where('unique_id', $parent_file_id)->first();
            // dd($tesing->self_parent->unique_id);

            //   $grand_parent = $request->self_parent;
            $parent_item_exist = App\FileVersion::where('section_id', $parent)->first();
            $item_exist = App\FileVersion::where('section_id', $parent_file_id)
                ->where('file_id', $unique_id)
                ->first();
        } else {
            $parent_item_exist = false;
            $item_exist = false;
        }

        $parent_item_exist = App\FileVersion::where('section_id', $parent_file_id)
            ->orWhere('file_id', $parent_file_id)
            ->first();

        if (!$parent_item_exist) {

            App\FileVersion::create([
                'section_id' => $parent_file_id,
                'file_id' => $parent_file_id,
            ]);
        }

        //        if (!$item_exist) {
        App\FileVersion::create([
            'section_id' => $parent_file_id,
            'file_id' => $unique_id,
        ]);
        //        }


        // Make file parent
        $item = FileManagerFile::where('user_id', $user_id)
            ->where('unique_id', $unique_id)
            ->firstOrFail();

        $item->update([
            'parent_id' => $parent_file_id,
        //  'grand_parent_id' => $grand_parent =='null' ? 0 : $grand_parent  ,

        ]);

    }


    public static function copy($request, $unique_id, $shared = null)
    {
        // Get user id
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        if ($request->from_type === 'folder') {

            // Move folder
            $all_folders = FileManagerFolder::where('user_id', $user_id)
                ->where('parent_id', $unique_id)->pluck('unique_id');
            $count = 0;
            if (count($all_folders)) {
                $count = count($all_folders);
            }

            for ($i = 0; $i <= $count; $i++) {
                $last1 = FileManagerFolder::orderBy('id', 'DESC');
                $last = $last1->first()->unique_id;
                // dd($last);
                if ($i == 0) {
                    $item = FileManagerFolder::where('user_id', $user_id)
                        ->where('unique_id', $unique_id)
                        ->firstOrFail();
                    $item->parent_id = $request->to_unique_id;

                } else {
                    $item = FileManagerFolder::where('user_id', $user_id)
                        ->where('unique_id', $all_folders[$i - 1])
                        ->firstOrFail();
                    $item->parent_id = $last;
                }

                $item->unique_id = ++$last;

                $test = FileManagerFolder::create($item->toArray());
                //  dd($item->unique_id);
                if ($i == 0) {
                    $file = FileManagerFile::where("folder_id", $unique_id)->get();
                } else {
                    $file = FileManagerFile::where("folder_id", $all_folders[$i - 1])->get();
                }
                // dd($file);
                // dd($file);
                if ($file) {
                    $u_id = FileManagerFile::latest()->first()->unique_id;

                    foreach ($file as $f) {
                        $newTask = $f->replicate();
                        $newTask->unique_id = ++$u_id;
                        $newTask->folder_id = $test->unique_id;
                        $newTask->save();
                    }
                }


            }

            // $last = FileManagerFolder::latest()->first()->unique_id;
            // $item->unique_id = $last + 1;
            // $item->parent_id = $request->to_unique_id;
            // $test =  FileManagerFolder::create($item->toArray());
            // return $item;


            //  $item->update([
            //      'parent_id' => $request->to_unique_id
            //  ]);

        } else {

            // Move file under new folder
            $item = FileManagerFile::where('user_id', $user_id)
                ->where('unique_id', $unique_id)
                ->firstOrFail();
            $newTask = $item->replicate();
            $u_id = $newTask->unique_id;
            $newTask->unique_id = $u_id + 1;
            $newTask->folder_id = $request->to_unique_id;
            $newTask->save();
            //  dd($item);
            //  $last = FileManagerFile::latest()->first()->unique_id;
            //  dd($last);
            //  $item->unique_id = $last + 1;
            //  $item->parent_id = $request->to_unique_id;
            //   dd($item);
            // $file = new FileManagerFile;
            // DB::table('file_manager_files')->insert($item->toArray());
            // $file->insert($item->toArray());
            //  FileManagerFile::create($item->toArray());

            //  $item->update([
            //      'folder_id' => $request->to_unique_id
            //  ]);
        }


    }

    /**
     * Upload file
     *
     * @param $request
     * @param null $shared
     * @return FileManagerFile|\Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public static function upload($request, $shared = null)
    {
        // dd($request->fps);
        // Get parent_id from request
        /* $f = FFMpeg::openUrl('https://videocoursebuilder.com/lesson-1.mp4');
        dd($f); */
        $file = $request->file('file');

        // Check or create directories
        self::check_directories(['chunks', 'file-manager']);

        // File name
        $user_file_name = basename('chunks/' . substr($file->getClientOriginalName(), 17), '.part');
        $disk_file_name = basename('chunks/' . $file->getClientOriginalName(), '.part');
        $temp_filename = $file->getClientOriginalName();

        // Generate file
        File::append(config('filesystems.disks.local.root') . '/chunks/' . $temp_filename, $file->get());

        // If last then process file
        if ($request->boolean('is_last')) {

            $metadata = get_image_meta_data($file);

            $disk_local = Storage::disk('local');
            $unique_id = get_unique_id();

            // Get user data
            $user_scope = is_null($shared) ? $request->user()->token()->scopes[0] : 'editor';
            $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

            // File Info
            $file_size = $disk_local->size('chunks/' . $temp_filename);
            $file_mimetype = $disk_local->mimeType('chunks/' . $temp_filename);

            // Check if user has enough space to upload file
            self::check_user_storage_capacity($user_id, $file_size, $temp_filename);

            // Create thumbnail
            $thumbnail = self::get_image_thumbnail('chunks/' . $temp_filename, $disk_file_name);

            // dd($thumbnail);

            // Move finished file from chunk to file-manager directory
            $disk_local->move('chunks/' . $temp_filename, 'file-manager/' . $disk_file_name);

            // Move files to external storage
            if (!is_storage_driver(['local'])) {

                // Clear failed uploads if exists
                self::clear_failed_files();

                // Move file to external storage service
                self::move_to_external_storage($disk_file_name, $thumbnail);
            }


            // Store file
            $options = [
                'mimetype' => get_file_type_from_mimetype($file_mimetype),
                'type' => get_file_type($file_mimetype),
                'folder_id' => $request->parent_id,
                'fps' => $request->fps === 'undefined' ? NUll : $request->fps,
                'metadata' => $metadata,
                'name' => $user_file_name,
                'unique_id' => $unique_id,
                'basename' => $disk_file_name,
                'user_scope' => $user_scope,
                'thumbnail' => $thumbnail,
                'filesize' => $file_size,
                'user_id' => $user_id,
            ];

            // Return new file
            //    $test =  FileManagerFile::create($options);

            //    $check =   Storage::disk('local')->get('file-manager/'.$test->basename);

            //    $thumbnail_path   = storage_path().'/file-manager';
            //    $video_path = storage_path().'/file-manager'.$test->basename;

            //    $timestamp        = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

            //    $thumbnail_image  = $test->name.".".$timestamp.".jpg";

            //    $thumbnail_status = Thumbnail::getThumbnail($video_path,$thumbnail_path,$thumbnail_image,1);


            //    $getFile = Storage::disk('local')->get($test->name);
            //    $check =  Storage::get('app/file-manager/'.$test->name);
            //    dd($thumbnail_status);

            //    Storage::disk('local')->url('screenshots/1.jpg');
            //    dd($test);
            //    dd(FileManagerFile::create($options));
            return FileManagerFile::create($options);
        }
    }

    /**
     * Clear failed files
     */
    private static function clear_failed_files()
    {
        $local_disk = Storage::disk('local');

        // Get all files from storage
        $files = collect([
            $local_disk->allFiles('file-manager'),
            $local_disk->allFiles('chunks')
        ])->collapse();

        $files->each(function ($file) use ($local_disk) {

            // Get the file's last modification time.
            $last_modified = $local_disk->lastModified($file);

            // Get diffInHours
            $diff = Carbon::parse($last_modified)->diffInHours(Carbon::now());

            // Delete if file is in local storage more than 24 hours
            if ($diff > 24) {

                Log::info('Failed file or chunk ' . $file . ' deleted.');

                // Delete file from local storage
                $local_disk->delete($file);
            }
        });
    }

    /**
     * Move file to external storage if is set
     *
     * @param string $filename
     * @param string|null $thumbnail
     */
    private static function move_to_external_storage(string $filename, ?string $thumbnail): void
    {
        $disk_local = Storage::disk('local');

        foreach ([$filename, $thumbnail] as $file) {

            // Check if file exist
            if (!$file) continue;

            // Get file size
            $filesize = $disk_local->size('file-manager/' . $file);

            // If file is bigger than 5.2MB then run multipart upload
            if ($filesize > 5242880) {

                // Get driver
                $driver = \Storage::getDriver();

                // Get adapter
                $adapter = $driver->getAdapter();

                // Get client
                $client = $adapter->getClient();

                // Prepare the upload parameters.
                $uploader = new MultipartUploader($client, config('filesystems.disks.local.root') . '/file-manager/' . $file, [
                    'bucket' => $adapter->getBucket(),
                    'key' => 'file-manager/' . $file
                ]);

                try {

                    // Upload content
                    $uploader->upload();

                } catch (MultipartUploadException $e) {

                    // Write error log
                    Log::error($e->getMessage());

                    // Delete file after error
                    $disk_local->delete('file-manager/' . $file);

                    throw new HttpException(409, $e->getMessage());
                }

            } else {

                // Stream file object to s3
                Storage::putFileAs('file-manager', config('filesystems.disks.local.root') . '/file-manager/' . $file, $file, 'private');
            }

            // Delete file after upload
            $disk_local->delete('file-manager/' . $file);
        }
    }

    /**
     * Check if directories 'chunks' and 'file-manager exist', if no, then create
     *
     * @param $directories
     */
    private static function check_directories($directories): void
    {
        foreach ($directories as $directory) {

            if (!Storage::disk('local')->exists($directory)) {
                Storage::disk('local')->makeDirectory($directory);
            }

            if (!is_storage_driver(['local'])) {
                if (!Storage::exists($directory)) {
                    Storage::makeDirectory($directory);
                }
            }
        }
    }

    /**
     * Create thumbnail for images
     *
     * @param string $file_path
     * @param string $filename
     * @param $file
     * @return string|null
     */
    private static function get_image_thumbnail(string $file_path, string $filename)
    {
        $local_disk = Storage::disk('local');

        // Create thumbnail from image
        if (in_array($local_disk->mimeType($file_path), ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'])) {

            // Get thumbnail name
            $thumbnail = 'thumbnail-' . $filename;

            // Create intervention image
            $image = Image::make(config('filesystems.disks.local.root') . '/' . $file_path)->orientate();

            // Resize image
            $image->resize(512, null, function ($constraint) {
                $constraint->aspectRatio();
            })->stream();

            // Store thumbnail to disk
            $local_disk->put('file-manager/' . $thumbnail, $image);
        }

        // Return thumbnail as svg file
        if ($local_disk->mimeType($file_path) === 'image/svg+xml') {

            $thumbnail = $filename;
        }

        return $thumbnail ?? null;
    }

    /**
     * Check if user has enough space to upload file
     *
     * @param $user_id
     * @param int $file_size
     * @param $temp_filename
     */
    private static function check_user_storage_capacity($user_id, int $file_size, $temp_filename): void
    {
        // Get user storage percentage and get storage_limitation setting
        $user_storage_used = user_storage_percentage($user_id, $file_size);
        $storage_limitation = get_setting('storage_limitation');

        // Check if user can upload
        if ($storage_limitation && $user_storage_used >= 100) {

            // Delete file
            Storage::disk('local')->delete('chunks/' . $temp_filename);

            // Abort uploading
            abort(423, 'You exceed your storage limit!');
        }
    }
}
