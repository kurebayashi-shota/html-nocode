<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
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
        $pages = Page::all();
        $page = Page::Find($id);

        return Inertia::render(
            'Components/Template/TempLayout',
            [
                'pages'=>$pages,
                'page'=>$page,
                'mode' => "preview"
            ]
        );
    }

    public function store (Request $request)
    {
        $layout_id = $request->input("layout_id");
        $agenda = $request->input('agenda');
        $title = $request->input('title');
        $title_detail = $request->input('title_detail');
        $li_elements = $request->input('li_elements');
        $obj_elements = $request->input('obj_elements');
        $path = $request->file('image')->store('images','public');
        $url = Storage::url($path);
        
        Page::create([
            'agenda' => $agenda,
            'title' => $title,
            'title_detail' => $title_detail,
            'layout_id' => $layout_id,
            'li_elements' => $li_elements,
            'obj_elements' => $obj_elements,
            'image' => $url,
        ]);

        return Inertia::location('/');
    }

    public function edit($id)
    {
        $page = Page::findOrFail($id);
        $pages = Page::all();
        $layout = $page->layout?->name;
        $layouts = Layout::all();

        return Inertia::render(
            'Welcome',
            [
                'page' => $page,
                'pages' => $pages,
                'layout' => $layout,
                'layouts' => $layouts,
                'mode' => "edit"
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
            'li_elements' => $request->li_elements,
            'obj_elements' => $request->obj_elements,
            'image' => $url,
        ]);

        return Inertia::location('/');
    }
}