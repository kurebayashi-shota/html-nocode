<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name','agenda',];
    protected $casts = ['agenda' => 'array',];

    public function Page (){
        return $this->hasMany(Page::class);
    }

}
