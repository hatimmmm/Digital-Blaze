<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controller\Api\AuthController;
use App\Http\Controllers\Api\AuthController as ApiAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
// header('Access-Control-Allow-Origin:  *');
// header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
// header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
Route::post('/logout', [ApiAuthController::class, 'logout']);
});
Route::post('/signup', [ApiAuthController::class, 'signup']);
Route::post('/login', [ApiAuthController::class, 'login']);
// Route::get('/brands',[BrandController::class,'index']);
// Route::post('/brand/add',[BrandController::class,'store']);
// Route::get('/brand/show',[BrandController::class,'show']);
// Route::post('/brand/update/{id}',[BrandController::class,'update']);
// Route::post('/brand/delete',[BrandController::class,'destroy']);
Route::apiResource('brands',BrandController::class);
Route::apiResource('products',ProductController::class);





