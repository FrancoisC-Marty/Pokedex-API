<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public static function findByType($id)
    {
        $pokemonByType = DB::select('select * from pokemon inner join pokemon_type on pokemon.id = pokemon_type.pokemon_id inner join types on types.id = pokemon_type.type_id where types.id = ?', [$id]);

        return $pokemonByType;
    }
}
