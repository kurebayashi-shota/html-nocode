<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Layout;

class Page extends Model
{
    protected $fillable = [
        'layout_id',
        'agenda',
        'title',
        'title_detail',
        'li_elements',
        'obj_elements',
        'obj_images',
    ];
    protected $casts = [ 
        'li_elements' => 'array',
        'obj_elements' => 'array',
        'obj_images' => 'array',
    ];
    
    public function layout()
    {
        return $this->belongsTo(Layout::class);
    }
}