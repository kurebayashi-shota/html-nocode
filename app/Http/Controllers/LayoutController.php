<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Layout;

class LayoutController extends Controller
{
    function index ()
    {
        $name = Layout::all();
        return Inertia::render(
            'Welcome',
            ["layouts" => $name,]
        );
    }
}
