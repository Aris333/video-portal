<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Notification extends Model
{
    protected $guarded = [];

    public function sender()
    {
      return  $this->belongsTo(User::class,'sender_id');
    }
    public function team()
    {
      return  $this->belongsTo(Team::class,'team_id');
    }
}
