<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Models\User;
use App\Models\Project;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $user_id = ['user' => auth()->user()->id,];
        $projects = Project::where('user_id',$user_id)->get();
        return Inertia::render('Dashboard',['projects'=>$projects]);
    }
}
