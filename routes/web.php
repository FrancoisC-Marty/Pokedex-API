<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get(
    '/',
    [
        'uses' => 'PokemonController@list',
        'as'   => 'pokemon-list'
    ]
);

$router->get(
    '/types',
    [
        'uses' => 'PokemonController@type',
        'as'   => 'pokemon-types'
    ]
);

$router->get(
    '/pokemon/{id}',
    [
        'uses' => 'PokemonController@details',
        'as'   => 'pokemon-details'
    ]
);

$router->get(
    '/test',
    [
        'uses' => 'PokemonController@test',
        'as'   => 'pokemon-test'
    ]
);
