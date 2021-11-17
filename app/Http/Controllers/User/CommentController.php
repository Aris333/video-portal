<?php

namespace App\Http\Controllers\User;

use App\Comment;
use App\Events\InviteEvent;
use App\Events\NewCommentEvent;
use App\FileManagerFile;
use App\FileManagerFolder;
use App\Http\Controllers\Controller;
use App\Http\Mail\NewComment;
use App\Http\Mail\SendInvitation;
use App\Http\Mail\SendJoinLink;
use App\Http\Requests\CommentRequest;
use App\Like;
use App\Mail\SendSupportForm;
use App\Notification;
use App\NotificationComment;
use App\Share;
use App\Team;
use App\TeamMember;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\String\u;
use Pusher\Pusher;
class CommentController extends Controller
{
    const IMAGE_SRC ='images/comments/';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CommentRequest $request)
    {
        $image = $request->annotation;
        if ($image) {
            // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace(' ', '+', $image);
            $imageName = rand(1000, 9999) . time() . '.png';
            $storage = Storage::put('/annotation/' . $imageName, base64_decode($image));
            $annotation = $imageName;
        }
        $comment = Comment::create([
            'comment' => $request->comment,
            'comment_type' => $request->comment_type,
            'video_time' => $request->video_time ? $request->video_time : '',
            'currentTime' => $request->currentTime ? $request->currentTime : '',
            'user_id' => $request->user_id,
            'file_id' => $request->file_id,
            'annotation' => $image ? $annotation : '',
            'text_edited_at' => $request->comment_spot_time,
            'parent_id' => $request->parent_id ? $request->parent_id : false,
            'visible' => $request->visible
        ]);
        $current_user = User::find($request->user_id);
        $file = FileManagerFile::where('id', $request->file_id)->first();
        $folder = FileManagerFolder::where('unique_id', $file->folder_id)->first();
//      $users = Share::where('item_id',$file->unique_id)->get('user_id');
//      $users = $users->unique();$file['folder_id']

        if (  !is_null($folder) && $folder->count() > 0) {
            $team = Team::where('folder_id', $folder->id)->with('members')->first();

            if( $team && $team->members){
                foreach ($team->members as $data) {
                    if($data->user->id != $request->user_id){
                        $notification = NotificationComment::create([
                            'user_id' => $data->user->id,
                            'comment_by' => $current_user->name,
                            'file_name' => $file->name,
                            'comment' => $request->comment,
                            'url' => env('app_url') . '/files/' . $request->file_id
                        ]);
                        $url = env('app_url').'/files/'.$request->file_id;
                        $comment['url'] =$url;
                        Mail::to($data->user->email)->send(new NewComment($data->user,$current_user,$comment));
                    }
                }
            }

        }
        $notification_data = [
            'comment_by'=>$current_user->name,
            'file_name'=>$file->name,
            'comment'=>$request->comment,
            'url'=>  env('app_url').'/files/'.$request->file_id
        ];
        broadcast(new NewCommentEvent($notification_data))->toOthers();

        if ($comment) {
                return response()->json( [ 'message'=>'Comment add Successfully','status' =>201,'data'=> $comment]);
        }else {
                return response()->json('comment not saved Successfully', 401, []);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function reply(Request $request)
    {
        $request->validate([
           'comment'=>'required' ,
           'user_id'=>'required' ,
           'file_id'=>'required' ,
           'parent_id'=>'required' ,
        ]);
          $comment =  Comment::create([
                'comment'=>$request->comment,
                'comment_type'=>$request->comment_type,
                'video_time'=>$request->video_time ? $request->video_time :'',
                'user_id'=>$request->user_id,
                'file_id'=>$request->file_id,
                'text_edited_at' => $request->comment_spot_time ? $request->comment_spot_time : '',
                'parent_id' => $request->parent_id ? $request->parent_id : 0,
                'visible'=>$request->visible
            ]);
        if ($comment) {
                return response()->json( [ 'message'=>'Comment add Successfully','status' =>201,'data'=> $comment]);
        }else {
                return response()->json('comment not saved Successfully', 401, []);
        }
    }

    public function isLikedByMe(Request $request)
    {
        $request->validate([
           'comment_id'=>'required',
           'user_id'=>'required'
        ]);
         $commentId = $request->comment_id;
         $userId = $request->user_id;
        $comment = Comment::findOrFail($commentId)->first();
        if (Like::whereUserId($userId)->whereCommentId($comment->id)->exists()){
            return 'true';
        }
        return 'false';
    }

    public function likeComment(Request $request)
    {
        $request->validate([
            'comment_id'=>'required' ,
            'user_id'=>'required' ,
            'file_id'=>'required',
        ]);

        $commentId = $request->comment_id;
        $userId = $request->user_id;
        $existing_like = Like::withTrashed()->whereCommentId($commentId)->whereUserId($userId)->first();

        if (is_null($existing_like)) {
                $comment=Comment::where('id',$request->comment_id)->first();
                $like = $comment->like_count;
                $like++;
                $comment->votes = $like;
                $comment->save();
                $like= Like::create([
                'comment_id'=>$request->comment_id,
                'user_id'=>$request->user_id,
                'file_id'=>$request->file_id,
            ]);
            return response()->json( [ 'message'=>'Comment Liked Successfully','status' =>201,'data'=> $like]);
        } else {
            if (is_null($existing_like->deleted_at)) {
                $comment=Comment::where('id',$request->comment_id)->first();
                $like = $comment->like_count;
                $like--;
                $comment->like_count = $like;
                $comment->save();
                $existing_like->delete();
                return response()->json([ 'message'=>'Like delete Successfully', 401,'data'=> []]);
            } else {
                $existing_like->restore();
                return response()->json(['message'=>'Comment  liked Successfully', 201,'data'=> []]);
            }
        }
        return response()->json(['message'=>'Like not delete Successfully', 401, 'data'=> []]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function sendCommentNofication($data)
    {

    }

    public function getImage(Request $request)
    {
     $user_id   = $request->user_id;
        $file_id   =  $request->file_id;
        $time   =   $request->currentTime;
        $comments = Comment::where('user_id',$user_id)
        ->where('file_id',$file_id)
        ->where('currentTime',$time)->first();

        if ($comments) {
            return response()->json( [ 'message'=>'Annotation Found Successfully','status' =>200,'data'=> $comments]);
        } else {
            return response()->json(['message'=>'Annotation not Found', 'status' =>401, 'data'=>[]]);
        }
    }

    public function list(Request $request)
    {
          $sort = $request->sortBy ? $request->sortBy :'newest' ;
          $comments = Comment::with('likes','replies')->join('users as u','u.id','=','comments.user_id')
                           ->where('file_id',$request->file_id)
                           ->where('parent_id','0')
            ->when($sort, function ($q) use ($sort) {
                if ($sort == 'newest') {
                    $q->orderByDesc('created_at');
                }
                if ($sort == 'oldest') {
                    $q->orderBy('created_at','asc');
                }
                if ($sort == 'timecode') {
                    $q->orderBy('video_time','asc');
                }
                if ($sort == 'commenter') {
                    $q->orderBy('name','asc');
                }
            })
      ->get(['comments.id as id','comment','comments.created_at as created_at','u.name as user_name', 'comments.video_time','text_edited_at','currentTime','annotation']);

        if ($comments) {
            return response()->json( [ 'message'=>'Comment Found Successfully','status' =>200,'data'=> $comments]);
        } else {
            return response()->json(['message'=>'comment not Found', 'status' =>401, 'data'=>[]]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(CommentRequest $request, $id)
    {
        $comment=Comment::where('user_id',$request->user_id)
            ->where('id',$id)
            ->first();
        if($comment)
        {
            $image = $request->annotation;
            if ($image) {
                $getFile = Storage::disk('links
                ')->get($comment->annotation);
                       $this->deleteImage($getFile);
                $image = str_replace('data:image/png;base64,', '', $image);
                $image = str_replace(' ', '+', $image);
                $imageName = rand(1000, 9999) . time() . '.png';
                Storage::disk('links')->put($imageName, base64_decode($image));
                $annotation = $imageName;
            }
              $update= $comment->update([
                'comment'=>$request->comment,
                'comment_type'=>$request->comment_type,
                'video_time'=>$request->video_time ? $request->video_time : $comment->video_time,
                'file_id'=>$request->file_id ? $request->file_id : $comment->user_id,
                'annotation'=> $image  ? $annotation : $comment->annotation,
                'user_id'=>$request->user_id,
                'text_edited_at' => $request->comment_spot_time,
                ]);

        if ($update) {
            return response()->json( [ 'message'=>'Comment add Successfully','status' =>200,'data'=> $update]);
        }else
         {
            return response()->json(['message'=>'comment not updated', 'status' =>401, 'data'=>[]]);
         }
      }
    }

    public  function updateComment(Request $request,$id)
    {
        $comment=Comment::where('user_id',$request->user_id)->where('id',$id)->first();
        if($comment) {
            $comment =    $comment->update([
            'comment'=>$request->comment
                 ]);
            if ($comment) {
                return response()->json( [ 'message'=>'Comment Update Successfully','status' =>200,'data'=> $comment]);
            } else {
                return response()->json(['message'=>'comment not updated', 'status' =>401, 'data'=>[]]);
            }
        }
    }

    public function deleteImage($file)
    {
        if (file_exists($file)) {
            unlink($file);
        }
    }

    public function add_description(Request $request)
    {
        $request->validate([
            'file_id'=>'required',
            'description'=>'required' ,
        ]);

        $description  =  FileManagerFile::find($request->file_id);
        if ($description) {
            $description->update([
                'description'=>$request->description
            ]);
            return response()->json( [ 'message'=>'Video Description add Successfully','status' =>200,'data'=> $description]);
        } else {
            return response()->json(['message'=>'Video not Found', 'status' =>401, 'data'=>[]]);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
         $comment = Comment::find($id);
         $user    = User::where('name',$request->commentor_name)->first();

         if($comment && $comment->user_id === $user->id)
         {
             if($comment->replies()->first())
             {
                 $comment->replies()->delete();
             }
             $comment->delete();
             return response()->json( [ 'message'=>'Comment Delete Successfully','status' =>200,'data'=>[]]);
            }else{
             return response()->json(['message'=>'Comment does not Delete', 'status' =>401, 'data'=>[]]);
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function invitePeople(Request $request)
    {
        $request->validate([
            'folder_id'=>'required',
        ]);
        $registered_user = [];
        $team = Team::where('folder_id',$request->folder_id)->first();
         if($team) {
             $user_id = $request->user_id;
             $request['team_id'] = $team->id;
             foreach ($user_id as $user)
             {
                 $user_exit = User::where('email', $user['email'])->first();
                 if($user_exit)
                 {
                     array_push( $registered_user ,$user_exit->id);
                     Notification::create([
                       'sender_id'=>$request->sender_id,
                       'user_id'=>$user_exit->id,
                       'title'=>"Join",
                       'team_id'=>$team->id,
                       'url'=>$request['shareLink'],
                     ]);
                 }else{
                     $email = $user['email'];
                     $request['receiver_email'] =$user;
                     Mail::to($email)->send(new SendInvitation($request->all(),$email));
                     return response()->json(['message'=>'User Invitation Successfully', 'status' =>200]);
                 }
             }
             $notification_data = [
                 'sender_id'=>$request->sender_id,
                 'user_id'=>$user_exit->id,
                 'title'=>"Join",
                 'team_name'=>$team->name,
                 'url'=>$request['shareLink'],
                 'registered_user'=> $registered_user
             ];
             broadcast(new InviteEvent($notification_data))->toOthers();
         }else{
             return response()->json(['message'=>'User Invitation Failed', 'status' =>401, 'data'=>[]]);
         }
    }

  // use when the boradcast method is not work.  currently we are not using this
  public  function pusherSendInvitation($notification_data){
    $options = array(
        'cluster' => 'us3',
        'useTLS' => true
    );
    $pusher = new \Pusher\Pusher(
        'd6d0e765f0a66298cf30',
        '5323c76e7977de22f481',
        '1161432',
        $options
    );

    $data['message'] = 'hello world';
    $pusher->trigger('Invite-channel', 'inviteEvent', $notification_data);
}

public function FunctionName(Type $var = null)
{
    # code...
}

}
