<?php

namespace App\Http\Controllers;

use App\Movie;
use App\MovieFormat;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MovieController extends Controller
{
    /**
     * MovieController constructor.
     */
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Movie $movie) {
        Movie::create([
            'user_id' => Auth::id(),
            'title' => $request->input('title'),
            'format' => $request->input('format'),
            'length' => $request->input('length'),
            'year' => $request->input('year'),
            'rating' => $request->input('rating'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie) {
        var_dump($movie);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie) {
        //
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function list($id, $sort = 'all') {
        if($sort === "all"){
            $user = Movie::where('user_id', $id)->get();
        }
        else {
            $user = Movie::where('user_id', $id)->orderBy($sort)->get();
        }
        return response()->json($user);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function formats() {
        $formats = MovieFormat::all();
        return response()->json($formats);
    }
}
