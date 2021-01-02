<?php

namespace App\Http\Controllers;

// Les facades sont dans le dossier Illuminate/Support
use Illuminate\Support\Facades\DB;
// On importe le model Pokemon
use App\Models\{Pokemon,Type};

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
     * récupération d'un pokemon par son id
     *
     * @param int $id
     * @return json
     */
    public function details($id)
    {
        $id = intval($id);

        // On vérifie si le pokemon demandé est bien dans la liste des 151 premiers
          if ($id <= DB::table('pokemon')->max('numero') && $id > 0) {
            // On récupère le pokemon voulu via son ID
            $pokemon = Pokemon::find($id);
            // On récupère les differents types (la relation a été définie dans le model Pokemon)
            $details = $pokemon->load(['types']);

            // On retourne l'info au format json avec le status code 200
            return $this->sendJsonResponse($details, 200);
          }
          else {
              // fonction 404 prévue par Lumen
              abort(404, "On a dit les 151 premiers !");
          }
    }

    /**
     * récupération d'une liste de pokemon par type
     *
     * @param int $id
     * @return json
     */
    public function byTypes($id)
    {
        $id = intval($id);

        // On vérifie si le type demandé est bien dans la liste
        if ($id <= DB::table('types')->max('id') && $id > 0) {
            // On récupère la liste de tous les pokemons
            $pokemon = Type::findByType($id);

            // On retourne l'info au format json avec le status code 200
            return $this->sendJsonResponse($pokemon, 200);
            }
            else {
                // fonction 404 prévue par Lumen
                abort(404, "On a dit les 151 premiers !");
            }
    }
}
