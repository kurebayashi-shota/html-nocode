<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//     ]);
// });  ログインを実装した時に下を上に組み込む?
Route::get('/create',[LayoutController::class, 'index'])->name('create');
Route::get('/create/{id}',[LayoutController::class, 'index'])->name('create.next');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/list',[ProjectController::class, 'index'])->name('list');
Route::get('/list/{id}',[UserController::class, 'show']);
Route::get('/',function(){return Inertia::render('Welcome');})->name('/');
Route::post('/store',[ProjectController::class, 'store'])->name('home.store');
Route::post('/posts',[PageController::class, 'store'])->name('posts.store');
Route::post('/update/{id}',[PageController::class, 'update'])->name('posts.update');
Route::get('/preview',[PageController::class, 'index'])->name('preview');
Route::get('/preview/list/{id}',[ProjectController::class, 'show']);
Route::get('/preview/{id}',[PageController::class, 'show']);
Route::get('/preview/agenda/{id}',[ProjectController::class, 'agendaShow']);
Route::get('/preview/index/{id}',[ProjectController::class, 'indexShow']);
Route::get('/page/{id}',[PageController::class, 'show']);
Route::get('/edit/{id}',[PageController::class, 'edit']);
Route::get('/add/{id}',[PageController::class, 'create']);
require __DIR__.'/auth.php';