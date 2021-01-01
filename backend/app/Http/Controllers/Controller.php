<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * Permet d'envoyer une réponse au format JSON avec le status code
     *
     * @param [type] $data
     * @param integer $httpStatusCode
     * @return json
     */
    protected function sendJsonResponse($data, $httpStatusCode = 200)
    {
        return response()->json($data, $httpStatusCode);
    }

    /**
     * Permet d'envoyer une réponse vide (uniquement un status code http)
     *
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendEmptyResponse($httpStatusCode = 200)
    {
        return response('', $httpStatusCode);
    }
}
