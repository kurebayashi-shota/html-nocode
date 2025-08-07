<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = ['layout_id', 'agenda', 'title', 'titleDetail'];

    public function layouts()
    {
        return $this->belongsTo(Layout::class);
    }
}