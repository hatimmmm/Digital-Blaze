<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/home/{name}/{age}', function ($name,$age) {
//     return 'welcome'.' '.$name.' '. 'age'.' ' .$age;
// });

Route::get('/home/{name}/{age?}', function ($name,$age=21) {

    
    return 'welcome'.' '.$name.' '. 'age'.' ' .$age;
});