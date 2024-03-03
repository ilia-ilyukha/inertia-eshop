<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        if (request()->category) {
            if (!request()->sort) {
                $products = Product::whereHas('categories', function($query) {
                    $query->where('slug', request()->category);
                })->inRandomOrder()->get(['name', 'slug', 'price', 'image']);
                $category_name = optional($categories->where('slug', request()->category)->first())->name;
                $categorySlug = $categories->where('slug', request()->category)->first()->slug;
            } else {
                $products = Product::whereHas('categories', function($query) {
                    $query->where('slug', request()->category);
                });
                $category_name = optional($categories->where('slug', request()->category)->first())->name;
                $categorySlug = $categories->where('slug', request()->category)->first()->slug;
                if (request()->sort == 'low_high') {
                    $products = $products->orderBy('price')->get(['name', 'slug', 'price', 'image']);
                } else {
                    $products = $products->orderBy('price', 'desc')->get(['name', 'slug', 'price', 'image']);
                }
            }
        } else {
            $products = Product::inRandomOrder()->get(['name', 'slug', 'price', 'image']);
            $category_name = 'All';
            $categorySlug = NULL;
        }
        return Inertia::render('Shop/Index', [
            'products' => $products,
            'categories' => $categories,
            'categoryName' => $category_name,            
            'categorySlug' => $categorySlug,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Shop/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
