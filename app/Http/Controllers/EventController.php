<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        return Inertia::render('Event/Show', [
            'event' => [
                'id' => '1',
                'title' => 'first event title',
                'start_date' => '24.02.2024',
                'description' => 'first event description'
            ],
        ]);
    }
}
