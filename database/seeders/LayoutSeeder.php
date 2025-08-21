<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Layout;

class LayoutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $layouts = ['タイトル','シンプル','手順','コード','用語',];
            foreach ($layouts as $layoutName){
                Layout::firstOrCreate(['name'=> $layoutName]);
            }
        // Layout::insert([ 基本的な記述方法
        //     ['name' => 'タイトル'],
        //     ['name' => 'シンプル'],
        //     ['name' => '手順'],
        // ]);
        // Layout::insert([
        //     ['name' => 'コード'],
        // ]);
    }
}
