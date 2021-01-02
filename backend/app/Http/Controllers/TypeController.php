<?php

namespace App\Http\Controllers;

// Les facades sont à la racine des namespaces
use Illuminate\Support\Facades\DB;
// On importe le model Pokemon
use App\Models\{Pokemon,Type};

class PokemonController extends Controller
{
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
            $pokemon = Type::find($id);
            // On ajoute à chaque pokemon de cette liste leurs types
            $details = $pokemon->load(['pokemon']);

            // On retourne l'info au format json avec le status code 200
            return $this->sendJsonResponse($details, 200);
            }
            else {
                // fonction 404 prévue par Lumen
                abort(404, "On a dit les 151 premiers !");
            }
    }
}
