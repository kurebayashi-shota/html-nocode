<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('layout_id')->constrained()->onDelete('cascade');
            $table->string('agenda')->nullable();
            $table->string('title')->nullable();
            $table->text('title_detail')->nullable();
            $table->json('li_elements')->nullable()->after('title_detail');
            $table->json('obj_elements')->nullable()->after('li_elements');
            $table->json('obj_images')->nullable()->after('obj_elements');
            $table->unsignedBigInteger('project_id')->nullable();
            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
