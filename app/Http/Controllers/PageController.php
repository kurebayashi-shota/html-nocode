<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Page;

class PageController extends Controller
{
    function store (Request $request):Response
    {
        $layout_id = $request->input("layout_id");
        $agenda = $request->input('agenda');
        $title = $request->input('title');
        $title_detail = $request->input('titleDetail');

        Page::create([
            'agenda' => $agenda,
            'title' => $title,
            'title_detail' => $title_detail,
            'layout_id' => $layout_id,
        ]);

        return Inertia::location('/');
    }
}