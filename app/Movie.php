<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'user_id', 'title', 'format', 'length', 'year', 'rating'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user() {
        return $this->hasOne('App\User');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function format() {
        return $this->hasOne('App\MovieFormat');
    }

    public function getFormatAttribute($format) {
        $formatQuery = MovieFormat::find($format);
        return $formatQuery->format;
    }
}
