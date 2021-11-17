<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FileVersion extends Model
{
       use SoftDeletes;
    protected $guarded =['id'];

    public function file()
    {
        return $this->belongsTo(FileManagerFile::class,'section_id');
    }

}
