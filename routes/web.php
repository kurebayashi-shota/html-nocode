<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//     ]);
// });  ログインを実装した時に下を上に組み込む?
Route::get('/',[LayoutController::class, 'index'])->name('/');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/posts',[PageController::class, 'store'])->name('posts.store');
Route::put('/update/{id}',[PageController::class, 'update'])->name('posts.update');
Route::get('/preview',[PageController::class, 'index'])->name('preview');
Route::get('/preview/{id}',[PageController::class, 'show']);
Route::get('/edit/{id}',[PageController::class, 'edit']);
require __DIR__.'/auth.php';