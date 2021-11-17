<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id')->with('user');
    }
    public function likes()
    {
        return $this->belongsToMany('App\User', 'likes');
    }

//    public static function boot() {
//        parent::boot();
//        static::deleting(function($comment) {
//            $comment->replies()->delete();
//        });
//    }

}
