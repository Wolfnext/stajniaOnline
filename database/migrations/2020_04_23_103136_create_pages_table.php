<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->integer('website_id')->unsigned();
            $table->string('title');
            $table->string('text');
            $table->string('image');
            $table->string('content');
            $table->boolean('visible');
            $table->timestamps();

            if(Schema::hasTable('websites')){
                $table->foreign('website_id')->references('id')->on('websites');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
