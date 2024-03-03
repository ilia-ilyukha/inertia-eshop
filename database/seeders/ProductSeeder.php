<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=1; $i < 12; $i++) { 
            $category = Category::find(1);
            Product::create([
                'name' => 'Womens ' . $i,
                'slug' => 'women-' . $i,
                'details' => 'women\'s hoodie',
                'description' => 'Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Praesentium 
                                voluptates minus explicabo nobis nesciunt 
                                nam nemo possimus animi dignissimos earum 
                                quas et deleniti vero fuga corporis magnam 
                                incidunt, itaque iure.',
                'code' => $category->category_code . '-00' . $i,
                'price' => rand(999, 9999),
                'quantity' => rand(1, 10)
            ])->categories()->attach($category);
        }

        for ($i=1; $i < 12; $i++) { 
            $category = Category::find(2);
            Product::create([
                'name' => 'Mens ' . $i,
                'slug' => 'men-' . $i,
                'details' => 'men\'s shirts',
                'description' => 'Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Praesentium 
                                voluptates minus explicabo nobis nesciunt 
                                nam nemo possimus animi dignissimos earum 
                                quas et deleniti vero fuga corporis magnam 
                                incidunt, itaque iure.',
                'code' => $category->category_code . '-00' . $i,
                'price' => rand(999, 9999),
                'quantity' => rand(1, 10)
            ])->categories()->attach($category);
        }

        for ($i=1; $i < 12; $i++) { 
            $category = Category::find(3);
            Product::create([
                'name' => 'Kids ' . $i,
                'slug' => 'kids-' . $i,
                'details' => 'kid\'s shirts',
                'description' => 'Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Praesentium 
                                voluptates minus explicabo nobis nesciunt 
                                nam nemo possimus animi dignissimos earum 
                                quas et deleniti vero fuga corporis magnam 
                                incidunt, itaque iure.',
                'code' => $category->category_code . '-00' . $i,
                'price' => rand(999, 9999),
                'quantity' => rand(1, 10)
            ])->categories()->attach($category);
        }
    }
}
