<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notification_comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('team_id');
            $table->string('comment_by');
            $table->string('url')->nullable();
            $table->string('file_name')->nullable();
            $table->text('comment')->nullable();
            $table->boolean('is_read')->default(false)->nullable();
            $table->timestamps();
            //$table->foreign('team_name')->references('name')->on('teams')->onDelete('cascade');
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notification_comments');
    }
}
