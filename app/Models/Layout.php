<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Layout extends Model
{
    protected $fillable = ['layouts'];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }
}
