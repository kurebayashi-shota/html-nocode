<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Page;
use App\Models\Layout;

class PageController extends Controller
{
    public function index()
    {
        $pages = Page::all();

        return Inertia::render(
            'Components/MainContents/PreviewList',
            ['pages' => $pages,]
        );
    }

    public function show($id)
    {
        $page = Page::Find($id);

        return Inertia::render(
            'Components/Template/TempLayout',
            ['page'=>$page,]
        );
    }

    function store (Request $request):Response
    {
        $layout_id = $request->input("layout_id");
        $agenda = $request->input('agenda');
        $title = $request->input('title');
        $title_detail = $request->input('title_detail');

        Page::create([
            'agenda' => $agenda,
            'title' => $title,
            'title_detail' => $title_detail,
            'layout_id' => $layout_id,
        ]);

        return Inertia::location('/');
    }

    public function edit($id)
    {
        $page = Page::findOrFail($id);
        $layout = $page->layout?->name;
        $layouts = Layout::all();

        return Inertia::render(
            'Welcome',
            [
                'pages' => $page,
                'layout' => $layout,
                'layouts' => $layouts,
            ]
        );
    }

    public function update(Request $request, $id)
    {
        $page = Page::find($id);

        $page->update([
            'agenda' => $request->agenda,
            'title' => $request->title,
            'title_detail' => $request->title_detail,
            'layout_id' => $request->layout_id,
        ]);

        return Inertia::location('/');
    }
}