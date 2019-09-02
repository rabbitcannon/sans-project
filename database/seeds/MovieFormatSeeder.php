<?php

use Illuminate\Database\Seeder;

class MovieFormatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $formats = [
            ['format' => 'VHS'],
            ['format' => 'Blu-Ray'],
            ['format' => 'Streaming']
        ];

        DB::table('movie_formats')->insert($formats);
    }
}
