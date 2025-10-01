<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $project = Project::All();
        return Inertia::render(
            'Components/MainContents/PreviewList',
            ['project' => $project]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->input("name");
        $agenda = $request->input("agenda");
        $user_id = $request->input("user_id");
        $project = Project::create(["name"=>$name,"agenda"=>$agenda,"user_id"=>$user_id,]);
        return Inertia::location(route('create',['project'=>$project->id]));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::Find($id);
        $pages = $project->page;
        return Inertia::render(
            'Components/MainContents/PreviewList',
            ['pages' => $pages]
        );        
    }

    public function agendaShow($id)
    {
        $project = Project::Find($id);
        $pages = $project->page;
        return Inertia::render(
            'Components/Template/TempLayout',
            [
                'project' => $project,
                'pages' => $pages,
                'agenda' => 'agenda',
            ]
        );
    }
    public function indexShow($id)
    {
        $project = Project::Find($id);
        $pages = $project->page;
        return Inertia::render(
            'Components/Template/TempLayout',
            [
                'project' => $project,
                'pages' => $pages,
                'layout_id' => 2,
                'mode' => 'index',
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
