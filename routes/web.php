<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // App::getLocale($lang);
    return Inertia::render('Home', [
        'age' => 20
    ]);
})->name('home');

Route::get('about/{lang}', function (Request $request, $lang) {
    app()->setLocale($lang);
    // dd(app()->getLocale());
    // dd($lang);
    return Inertia::render('About', [
        'welcome' => trans('msg.welcome'),
        'success' => $request->session()->get('success'),
    ]);
})->name('about');

Route::post('/products', function (Request $request) {
    $request->validate([
        'name' => ['required', 'max:50'],
        'weight' => ['required', 'max:50'],
    ]);

    $product = Product::create([
        'name' => $request->name,
        'weight' => $request->weight
    ]);
    if ($product) {
        return redirect(route('about', app()->getLocale()))->with('success', 'warmatebit');
    }
})->name('products');

route::get('/del/{id}', function (Request $request) {
    $n = $request->id;
    $del = Product::where('id', $n)->delete();
    return back();
});
