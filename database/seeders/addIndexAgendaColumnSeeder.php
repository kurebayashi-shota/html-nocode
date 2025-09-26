<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Layout;
class addIndexAgendaColumnSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Layout::Insert([
            [ 'name' => 'index' ],
            [ 'name' => 'agenda' ],
        ]);
    }
}