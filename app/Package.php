<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Kyslik\ColumnSortable\Sortable;
class Package extends Model
{
    use  Sortable;
    protected $guarded = [];

    public $sortable = [
        'id',
        'name',
        'size',
        'cost',
        'duration',
        'details',
    ];

}
