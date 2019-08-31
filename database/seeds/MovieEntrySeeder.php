<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class MovieEntrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert([
            'user_id' => 1,
            'title' => 'Test Title',
            'format' => 'Blu-Ray',
            'length' => 120,
            'year' => '2019-09-01',
            'rating' => 4,
            'created_at' => Carbon::now()
        ]);
    }
}
