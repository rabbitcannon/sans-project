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
        'year',
        'created_at',
        'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user() {
        return $this->hasOne('App\User');
    }

    public function format() {
        return $this->hasOne('App\MovieFormat');
    }

    public function getFormatAttribute() {
        return $this->attributes['format'];
    }
    /**
     * @return string
     */
    public function getYearAttribute() {
        $parsed = Carbon::parse($this->attributes['year']);
        return $parsed->format('Y');
    }
}
