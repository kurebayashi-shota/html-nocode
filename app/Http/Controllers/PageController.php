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

    public function create($id)
    {
        return Inertia::location(
            route('create',
            ['project' => $id]
            )
        );
    }

    public function show($id)
    {
        $page = Page::Find($id);
        $pages = Page::where('project_id',$page->project_id)->get();
        $currentIndex = $pages->search(fn($page) => $page->id==$id);
        // ↑型変換したほうがいい?
        return Inertia::render(
            'Components/Template/TempLayout',
            [
                'pages'=>$pages,
                'page'=>$page,
                'currentIndex'=>$currentIndex,
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
        $project_id = $request->input('project_id');
        if($request->hasFile('obj_images.0.path')){
            $path = $request->file('obj_images.0.path')->store('images','public');
            $url = Storage::url($path);
            $height = $obj_images[0]['height'] ?? '';}
        else{$path=null;$url=null;$height=null;}
    
        Page::create([
            'agenda' => $agenda,
            'title' => $title,
            'title_detail' => $title_detail,
            'layout_id' => $layout_id,
            'li_elements' => $li_elements,
            'obj_elements' => $obj_elements,
            'obj_images' => [
                [
                    'path' => $url,
                    'height' => $height,
                ]
            ],
            'project_id' => $project_id,
        ]);

        return Inertia::location(
            `{/create?project=${project_id}}`,
            ['layout_id'=>$layout_id]
        );
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
        $path = $request->file('obj_images.0.path')->store('images', 'public');
        $url = Storage::url($path);

        $page->update([
            'agenda' => $request->agenda,
            'title' => $request->title,
            'title_detail' => $request->title_detail,
            'layout_id' => $request->layout_id,
            'li_elements' => $request->li_elements,
            'obj_elements' => $request->obj_elements,
            'obj_images' => [
                [
                    'path' => $url,
                    'height' => $request->input('obj_images.0.height'),
                ]
            ],
        ]);

        return Inertia::location('/');
    }
}
