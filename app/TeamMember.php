<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Team;

class TeamMember extends Model
{
    protected $guarded = [];

    public function team()
    {
        return $this->belongsTo(Team::class,'team_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }



}
