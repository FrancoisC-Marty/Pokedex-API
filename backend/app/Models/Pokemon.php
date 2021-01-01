<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    /**
     * Définition de la relation Many To Many entre les pokemeon et les types
     *
     * @return void
     */
    public function types()
    {
        return $this->belongsToMany(Type::class);
    }
}
