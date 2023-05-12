<?php

use App\Http\Controllers\DashboardController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;

// Public routes here

Route::middleware(['auth'])->group(function () {    
    // Authenticated user routes here

    Route::middleware([AdminMiddleware::class])->group(function () {
        // Admin-only routes here

        Route::get('/dashboard', [DashboardController::class, 'index']);
    });
});


Route::get('/', function () {
    return view('welcome');
});
