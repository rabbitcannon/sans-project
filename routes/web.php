<?php

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
    return view('main');
});

Auth::routes();

/*
 * List all movies for a user
 */
Route::get('movie/list', 'MovieController@list');

/*
 * Movie resource routes for CRUD operations
 */
Route::resource('movie', 'MovieController')->only([
    'store', 'show', 'update', 'destroy'
]);

