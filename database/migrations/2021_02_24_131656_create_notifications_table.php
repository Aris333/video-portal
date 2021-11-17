<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('sender_id');
            $table->string('title');
            $table->unsignedBigInteger('team_id');
//            $table->string('team_name');
            $table->string('url')->nullable();
            $table->text('message')->nullable();
            $table->boolean('is_read')->default(false)->nullable();
            $table->timestamps();
//            $table->foreign('team_name')->references('name')->on('teams')->onDelete('cascade');
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
        Schema::dropIfExists('notifications');
    }
}
