<?php

namespace App\Http\Controllers\FileFunctions;

use App\FileVersion;
use App\Http\Requests\FileFunctions\CreateFolderRequest;
use App\Http\Requests\FileFunctions\DeleteItemRequest;
use App\Http\Requests\FileFunctions\RenameItemRequest;
use App\Http\Requests\FileFunctions\MoveItemRequest;
use App\Http\Requests\FileFunctions\CopyItemRequest;

use App\Http\Requests\VersionItemRequest;
use App\Team;
use Illuminate\Http\Request;
use App\Http\Requests\FileFunctions\UploadRequest;
use App\Http\Tools\Demo;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Tools\Guardian;
use App\Http\Tools\Editor;
use App\FileManagerFile;
use App\Http\Requests\FileFunctions\ImageUploadRequest;
use Exception;
use Illuminate\Support\Facades\Storage;

class EditItemsController extends Controller
{
    /**
     * Create new folder for authenticated master|editor user
     *
     * @param CreateFolderRequest $request
     * @return array
     * @throws Exception
     */
    public function user_create_folder(CreateFolderRequest $request)
    {
        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::create_folder($request);
        }

        // Check permission to create folder for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Check access to requested directory
            Guardian::check_item_access($request->parent_id, $shared);
        }

        // Create new folder
        return Editor::create_folder($request);
    }

    /**
     * Create new folder for guest user with edit permission
     *
     * @param CreateFolderRequest $request
     * @param $token
     * @return array
     * @throws Exception
     */
    public function guest_create_folder(CreateFolderRequest $request, $token)
    {
        // Get shared record
        $shared = get_shared($token);

        if (is_demo($shared->user_id)) {
            return Demo::create_folder($request);
        }

        // Check shared permission
        if (!is_editor($shared)) abort(403);

        // Check access to requested directory
        Guardian::check_item_access($request->parent_id, $shared);

        // Create folder
        return Editor::create_folder($request, $shared);
    }

    /**
     * Rename item for authenticated master|editor user
     *
     * @param RenameItemRequest $request
     * @param $unique_id
     * @return mixed
     * @throws Exception
     */
    public function user_rename_item(RenameItemRequest $request, $unique_id)
    {
        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::rename_item($request, $unique_id);
        }

        // Check permission to rename item for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Get file|folder item
            $item = get_item($request->type, $unique_id, Auth::id());

            // Check access to requested directory
            if ($request->type === 'folder') {
                Guardian::check_item_access($item->unique_id, $shared);
            } else {
                Guardian::check_item_access($item->folder_id, $shared);
            }
        }

        // Rename Item
        return Editor::rename_item($request, $unique_id);
    }

    /**
     * Rename item for guest user with edit permission
     *
     * @param RenameItemRequest $request
     * @param $unique_id
     * @param $token
     * @return mixed
     * @throws Exception
     */
    public function guest_rename_item(RenameItemRequest $request, $unique_id, $token)
    {
        // Get shared record
        $shared = get_shared($token);

        // Demo preview
        if (is_demo($shared->user_id)) {
            return Demo::rename_item($request, $unique_id);
        }

        // Check shared permission
        if (!is_editor($shared)) abort(403);

        // Get file|folder item
        $item = get_item($request->type, $unique_id, $shared->user_id);

        // Check access to requested item
        if ($request->type === 'folder') {
            Guardian::check_item_access($item->unique_id, $shared);
        } else {
            Guardian::check_item_access($item->folder_id, $shared);
        }

        // Rename item
        $item = Editor::rename_item($request, $unique_id, $shared);

        // Set public url
        if ($item->type !== 'folder') {
            $item->setPublicUrl($token);
        }

        return $item;
    }

    /**
     * Delete item for authenticated master|editor user
     *
     * @param DeleteItemRequest $request
     * @param $unique_id
     * @return ResponseFactory|\Illuminate\Http\Response
     * @throws Exception
     */
    public function user_delete_item(DeleteItemRequest $request, $unique_id)
    {
        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::response_204();
        }

        // Check permission to delete item for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // Prevent force delete for non-master users
            if ($request->input('data.force_delete')) abort('401');

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Get file|folder item
            $item = get_item($request->input('data.type'), $unique_id, Auth::id());

            // Check access to requested directory
            if ($request->input('data.type') === 'folder') {
                Guardian::check_item_access($item->unique_id, $shared);
            } else {
                Guardian::check_item_access($item->folder_id, $shared);
            }
        }

        // Delete item
        Editor::delete_item($request, $unique_id);

        // Return response
        return response(null, 204);
    }

    /**
     * Delete item for guest user with edit permission
     *
     * @param DeleteItemRequest $request
     * @param $unique_id
     * @param $token
     * @return ResponseFactory|\Illuminate\Http\Response
     * @throws Exception
     */
    public function guest_delete_item(DeleteItemRequest $request, $unique_id, $token)
    {
        // Get shared record
        $shared = get_shared($token);

        // Demo preview
        if (is_demo($shared->user_id)) {
            return Demo::response_204();
        }

        // Check shared permission
        if (!is_editor($shared)) abort(403);

        // Get file|folder item
        $item = get_item($request->input('data.type'), $unique_id, $shared->user_id);

        // Check access to requested item
        if ($request->input('data.type') === 'folder') {
            Guardian::check_item_access($item->unique_id, $shared);
            dd(1);
            $team = Team::where('folder_id', $item->id)->first();
            if ($team) {
                $team->delete();
            }
        } else {
            Guardian::check_item_access($item->folder_id, $shared);
        }

        // Delete item
        Editor::delete_item($request, $unique_id, $shared);

        // Return response
        return response(null, 204);
    }

    /**
     * Upload file for authenticated master|editor user
     *
     * @param UploadRequest $request
     * @return FileManagerFile|Model
     * @throws Exception
     */
    public function user_upload(UploadRequest $request)
    {
        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::upload($request);
        }

        // Check permission to upload for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Check access to requested directory
            Guardian::check_item_access($request->parent_id, $shared);
        }

        // Return new uploaded file
        return Editor::upload($request);
    }

    /**
     * Delete file for guest user with edit permission
     *
     * @param UploadRequest $request
     * @param $token
     * @return FileManagerFile|Model
     * @throws Exception
     */
    public function guest_upload(UploadRequest $request, $token)
    {
        // Get shared record
        $shared = get_shared($token);

        // Demo preview
        if (is_demo($shared->user_id)) {
            return Demo::upload($request);
        }

        // Check shared permission
        if (!is_editor($shared)) abort(403);

        // Check access to requested directory
        Guardian::check_item_access($request->parent_id, $shared);

        // Return new uploaded file
        $new_file = Editor::upload($request, $shared);

        // Set public access url
        $new_file->setPublicUrl($token);

        return $new_file;
    }

    /**
     * Move item for authenticated master|editor user
     *
     * @param MoveItemRequest $request
     * @param $unique_id
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function user_move(MoveItemRequest $request, $unique_id)
    {
        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::response_204();
        }

        // Check permission to upload for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Check access to requested directory
            Guardian::check_item_access($request->to_unique_id, $shared);
        }

        // Move item
        Editor::move($request, $unique_id);

        return response('Done!', 204);
    }

    /**
     * Move item for authenticated master|editor user
     *
     * @param VersionItemRequest $request
     * @param $unique_id
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function video_version(VersionItemRequest $request)
    {

        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::response_204();
        }

        // Check permission to upload for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Check access to requested directory
            Guardian::check_item_access($request->to_unique_id, $shared);
        }

       // dd($request->from_item);
        // Move item
        Editor::makeVersion($request,$request->from_unique_id,$request->to_unique_id);

        return response('Done!', 204);
    }

    /**
     * Move item for authenticated master|editor user
     *
     * @param VersionItemRequest $request
     * @param $unique_id
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function get_version_list(Request $request)
    {
        $file = FileManagerFile::find($request->id);
        $files_id = FileVersion::with('file')->where('section_id',$file->unique_id)->pluck('file_id');

         $files= FileManagerFile::whereIn('unique_id',$files_id)->get();

        if (!empty($files)) {
            return response()->json(['message' => 'Versions Found Successfully', 'status' => 200, 'data' => $files]);
        } else {
            return response()->json(['message' => 'Versions Not Found', 'status' => 400]);
        }

    }


    public function get_version_comparison(Request $request)
    {
        $file = FileManagerFile::find($request->id);
        $files_id = FileVersion::with('file')->where('section_id',$file->unique_id)->pluck('file_id');

         $files= FileManagerFile::whereIn('unique_id',$files_id)
             ->orderBy('created_at','desc')->take(2)->get();

        if (!empty($files)) {
            return response()->json(['message' => 'Versions Found Successfully', 'status' => 200, 'data' => $files]);
        } else {
            return response()->json(['message' => 'Versions Not Found', 'status' => 400]);
        }

    }

    public function change_version_parent(Request $request)
    {
        $file = FileManagerFile::find($request->id);
        $files_id = FileVersion::with('file')->where('section_id',$file->unique_id)->pluck('file_id');

         $files= FileManagerFile::whereIn('unique_id',$files_id)
             ->orderBy('created_at','desc')->take(2)->get();

        if (!empty($files)) {
            return response()->json(['message' => 'Versions Found Successfully', 'status' => 200, 'data' => $files]);
        } else {
            return response()->json(['message' => 'Versions Not Found', 'status' => 400]);
        }

    }

    public function delete_vedio(Request $request)
    {
        $file = FileManagerFile::find($request->id);
        if($file){
         $file_version = FileVersion::where('section_id',$file->unique_id)
                         ->orWhere('file_id',$file->unique_id)
                         ->get()->each(function($fileversion) {
                                $fileversion->delete();
                         });
         $file->update([
                'parent_id'=>0
                ]);
            return response()->json(['message' => 'Versions Removed Successfully', 'status' => 200]);
        } else {
            return response()->json(['message' => 'Versions Not Removed', 'status' => 400]);
        }
    }


    public function user_copy(CopyItemRequest $request, $unique_id)
    {
        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::response_204();
        }
        // dd($request->user());

        // Check permission to upload for authenticated editor
        if ($request->user()->tokenCan('editor')) {

            // check if shared_token cookie exist
            if (!$request->hasCookie('shared_token')) abort('401');

            // Get shared token
            $shared = get_shared($request->cookie('shared_token'));

            // Check access to requested directory
            Guardian::check_item_access($request->to_unique_id, $shared);
        }

        // Move item
        return Editor::copy($request, $unique_id);

        // return response('Done!', 200);


    }

    /**
     * Move item for guest user with edit permission
     *
     * @param MoveItemRequest $request
     * @param $unique_id
     * @param $token
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function guest_move(MoveItemRequest $request, $unique_id, $token)
    {
        // Get shared record
        $shared = get_shared($token);

        // Demo preview
        if (is_demo(Auth::id())) {
            return Demo::response_204();
        }

        // Check shared permission
        if (!is_editor($shared)) abort(403);

        $moving_unique_id = $unique_id;

        if ($request->from_type !== 'folder') {
            $file = FileManagerFile::where('unique_id', $unique_id)
                ->where('user_id', $shared->user_id)
                ->firstOrFail();

            $moving_unique_id = $file->folder_id;
        }

        // Check access to requested item
        Guardian::check_item_access([
            $request->to_unique_id, $moving_unique_id
        ], $shared);

        // Move item
        Editor::move($request, $unique_id, $shared);

        return response('Done!', 204);
    }


    public function add_description(Request $request)
    {
        $request->validate([
            'file_id' => 'required',
            'description' => 'required',
        ]);

        $description = FileManagerFile::find($request->file_id);
        if ($description) {
            $description->update([
                'description' => $request->description
            ]);
            return response()->json(['message' => 'Video Description add Successfully', 'status' => 200, 'data' => $description]);
        } else {
            return response()->json(['message' => 'Video not Found', 'status' => 401, 'data' => []]);
        }
    }

    public function image_upload(ImageUploadRequest $request)
    {
        $img = $request->file;
        $image_parts = explode(";base64,", $img);

        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type = $image_type_aux[1];

        $image_base64 = base64_decode($image_parts[1]);
        $fileName = uniqid() . '.jpeg';

        // $file = $folderPath . $fileName;
        $storage = Storage::put('/file-manager/' . $fileName, $image_base64);

        $img_file = FileManagerFile::find($request->id);

        //thum_scrub img


        $img1 = $request->thumbnail_img;
        $image_parts1 = explode(";base64,", $img1);

        $image_type_aux1 = explode("image/", $image_parts1[0]);
        $image_type = $image_type_aux1[1];

        $image_base641 = base64_decode($image_parts1[1]);
        $fileName1 = uniqid() . '.jpeg';

        // $file = $folderPath . $fileName;
        $storage = Storage::put('/file-manager/' . $fileName1, $image_base641);
        // $file_manager = FileManagerFile::find(1);


        $img_file->thumbnail = $fileName;
        $img_file->thumb_img = $fileName1;

        $img_file->frames = $request->frames;
        $img_file->save();
        return $img_file;


    }


    public function update_status(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'user_id' => 'required',
            'status' => 'required',
        ]);
        $fileManager = FileManagerFile::where('user_id', $request->user_id)
            ->where('id', $request->id)
            ->first();
        if ($fileManager) {
            $fileManager->update([
                'status' => $request->status
            ]);
            return response()->json(['message' => 'File  Status has been update Successfully', 'status' => 200, 'data' => $fileManager]);
        } else {
            return response()->json(['message' => 'File  Status not update Successfully', 'status' => 401, 'data' => []]);
        }
    }


}
