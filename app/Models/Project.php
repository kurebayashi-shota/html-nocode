<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'agenda', 'user_id',];
    protected $casts = ['agenda' => 'array',];

    public function page (){
        return $this->hasMany(Page::class);
    }

    public function user (){
        return $this->belongsTo(User::class);
    }
}
