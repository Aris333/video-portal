<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatusToFileManagerFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('file_manager_files', function (Blueprint $table) {
            $table->enum('status', ['Needs Review', 'In Progress','Approved','No Status'])->default('No Status')->after('fps');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('file_manager_files', function (Blueprint $table) {
            //
        });
    }
}
