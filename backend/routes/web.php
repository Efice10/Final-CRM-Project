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

Route::get('/company/create', [CompanyController::class, 'create']);
Route::get('/company/read', [CompanyController::class, 'read']);
Route::get('/company/update', [CompanyController::class, 'update']);
Route::get('/company/delete', [CompanyController::class, 'delete']);

