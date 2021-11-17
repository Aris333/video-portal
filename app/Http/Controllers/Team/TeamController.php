<?php

namespace App\Http\Controllers\Team;

use App\FileManagerFile;
use App\Http\Controllers\Controller;
use App\Http\Requests\Share\CreateShareRequest;
use App\Http\Requests\Share\UpdateShareRequest;
use App\Http\Resources\ShareResource;
use App\Share;
use App\Team;
use App\TeamMember;
use App\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class TeamController extends Controller
{

    /**
     * Get shared record
     *
     * @return ShareResource
     */
    public function show($token)
    {
        // Get record
        $shared = Share::where(DB::raw('BINARY `token`'), $token)
            ->firstOrFail();

        return new ShareResource($shared);
    }

    /**
     * Generate file share link
     *
     * @param CreateShareRequest $request
     * @return ShareResource
     */
    public function store(Request $request)
    {
            $request->validate([
                'folder_id'=>'required',
                'user_id'=>'required',
                'name'=>'required|unique:teams,name',
            ]);
//          $teamFolder =  Team::where('folder_id',$request->folder_id)->first();
//          if(!$teamFolder){
            $team = Team::firstOrCreate([
                'name'=>$request->name,
                'folder_id'=>$request->folder_id,
            ]);
            TeamMember::firstOrCreate([
                'user_id'=>$request->user_id,
                'team_id'=>$team->id
            ]);
        if($team) {
            return response()->json(['message' => 'Team Created Successfully', 'status' => 200, 'data' => [$team]]);
        }else {
            return response()->json(['message'=>'Team Creation Failed', 'status' =>401, 'data'=>[]]);
        }

    }

    /**
     * Update sharing
     *
     * @param UpdateShareRequest $request
     * @param $token
     * @return ShareResource
     */
    public function update(UpdateShareRequest $request, $token)
    {
        // Get sharing record
        $shared = Share::where('token', $token)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        // Update sharing record
        $shared->update([
            'permission' => $request->permission,
            'protected'  => $request->protected,
            'expire_in'  => $request->expiration,
            'password'   => $request->password ? Hash::make($request->password) : $shared->password,
        ]);

        // Return shared record
        return new ShareResource($shared);
    }

    /**
     * Delete sharing item
     *
     * @param $token
     * @return ResponseFactory|\Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy($token)
    {
        // Get sharing record
        $shared = Share::where('token', $token)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        // Delete shared record
        $shared->delete();

        // Done
        return response('Done!', 204);
    }

    public function checkTeamMember(Request $request)
    {
         $team = Team::where('id',$request->id)->with('members')
             ->first();
        if($team){
            return response()->json( [ 'message'=>'Team Found Successfully','status' =>200,'data'=>[]]);
        }else {
            return response()->json(['message'=>'Team Found Failed', 'status' =>401, 'data'=>[]]);
        }
    }

    public function findTeam($id)
    {
         $team = Team::where('id',$id)->first();
               $folder = FileManagerFile::find($team->team_id);
        if($team){
            return response()->json( [ 'message'=>'Team Found Successfully','status' =>200,'data'=>[$folder,$team]]);
        }else {
            return response()->json(['message'=>'Team Found Failed', 'status' =>401, 'data'=>[]]);
        }
    }

     public function findTeamById(Request $request)
    {
        $team = Team::where('folder_id',$request->id)->first();

        if($team){
            return response()->json( [ 'message'=>'Team Found Successfully','status' =>200,'data'=>$team]);
        }else {
         //   abort(422, 'Invalid team name: Team Found FaileCd');
            return response()->json( [ 'error'=>'Team Found Failed','status' =>422]);
        }
    }

}
