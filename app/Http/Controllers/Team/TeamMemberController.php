<?php

namespace App\Http\Controllers\Team;

use App\FileManagerFile;
use App\FileManagerFolder;
use App\Http\Controllers\Controller;
use App\Http\Mail\SendInvitation;
use App\Share;
use App\Team;
use App\TeamMember;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class TeamMemberController extends Controller
{


    public function store(Request $request)
    {
        $request->validate([
//            'team_id'=>'required',
          //  'user_id'=>'required|user_id|unique:teams,user_id,'.Auth::id().',id'
            'user_id'=>'required'
        ]);

            $team = Team::where('name',$request->team_name)->first();
            $teamMember = TeamMember::firstOrCreate([
                'team_id'=> $team ? $team->id: $request->team_id,
                'user_id'=>$request->user_id,
            ]);

        if($teamMember){
            return response()->json( [ 'message'=>'TeamMember Created Successfully','status' =>200,'data'=>[$teamMember]]);
        }else {
            return response()->json(['message'=>'TeamMember Creation Failed', 'status' =>401, 'data'=>[]]);
        }

    }

    public function checkMember(Request $request)
    {
        $request->validate([
            'user_id'=>'required',
        ]);

        $teamMember  = TeamMember::where('user_id',$request->user_id)->first();

        if($teamMember){
            return response()->json( [ 'message'=>'TeamMember Found Successfully','status' =>200,'data'=>[]]);
        }else {
            return response()->json(['message'=>'TeamMember Found Failed', 'status' =>400, 'data'=>[]]);
        }
    }

    public function getTotalProject(Request $request)
    {
        $request->validate([
            'user_id'=>'required',
        ]);

      // $file=  FileManagerFile::where('unique_id',$this->item_id)->first();
        $totalProjects  = Share::where('user_id',$request->user_id)->with('item')
            ->get();
        $totalProjects  = $totalProjects->unique('item_id')->toArray();

        if($totalProjects){
            return response()->json( [ 'message'=>'Total Project Found Successfully','status' =>200,'data'=>$totalProjects]);
        }else{
            return response()->json(['message'=>'Total Project Found Failed', 'status' =>400, 'data'=>[]]);
        }
    }

    public function updateInvite(Request $request)
    {
        $request->validate([
            'folder_id'=>'required',
            'team_id'=>'required',
        ]);
        $teamMember = TeamMember::where('id',$request->id)->first();

        $teamMember->update([

        ]);
        $user_id = $request->user_id;
        $user =  User::where('id',$user_id)->first();
        $request['team_id'] = $team->id;
        $request['share_link'] =  url('/').'/'. $request->team_id;

        if($user)
        {
            $email = $user->email;
            Mail::to($email)->send(new SendInvitation($request->all()));
            return response()->json( [ 'message'=>'User Invited Successfully','status' =>200,'data'=>$team]);
        }else{
            return response()->json(['message'=>'User Invitation Failed', 'status' =>401, 'data'=>[]]);
        }
    }

    public function findMembers($id)
    {
         $team_members= TeamMember::where('team_id',$id)->get();
        if($team_members){
            return response()->json( [ 'message'=>'TeamMember Found Successfully','status' =>200,'data'=>[$team_members]]);
        }else {
            return response()->json(['message'=>'TeamMember not Found', 'status' =>400, 'data'=>[]]);
        }
    }

}
