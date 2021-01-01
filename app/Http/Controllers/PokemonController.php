<?php

namespace App\Http\Controllers;

// Les facades sont à la racine des namespaces
use Illuminate\Support\Facades\DB;
// On importe le model Pokemon
use App\Models\{Pokemon,Type,Pokemon_type};

class PokemonController extends Controller
{
    /**
     * Pokemon List
     *
     * @return json
     */
    public function list()
    {
        return $this->sendJsonResponse(Pokemon::all(), 200);
    }

    /**
     * Pokemon type List
     *
     * @return json
     */
    public function type()
    {
        return $this->sendJsonResponse(Type::all(), 200);
    }

    /**
     * Pokemon type List
     *
     * @return json
     */
    public function test()
    {
        return $this->sendJsonResponse(Pokemon_type::all(), 200);
    }

    /**
     * Get a category
     *
     * @param int $categoryId
     * @return json
     */
    public function item($id)
    {
        $id = intval($id);

          if ($id <= DB::table('pokemons')->max('numero') && $id > 0) {
            $pokemon = Pokemon::find($id);
            // On retourne l'info au format json avec le status code 200
            return $this->sendJsonResponse($pokemon, 200);
          }
          else {
              // fonction 404 prévue par Lumen
              abort(404, "On a dit les 151 premiers !");
          }
    }
}
