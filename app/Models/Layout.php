<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Page;

class Layout extends Model
{
    protected $fillable = ['name'];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }
}
