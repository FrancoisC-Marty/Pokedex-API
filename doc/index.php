<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">    
    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= $router->generate('home') ?>css/style.css">
    <title>Pokedex</title>
</head>
<body>
<container class="global">
        <header class="pokedex-container">
            <nav class="pokedex">
                <a href="<?= $router->generate('home') ?>" class="pokedex_home"><h3>Pokédex</h3></a>
                <ul class="pokedex_menu">
                    <a href="<?= $router->generate('home') ?>"><li>Liste</li></a>
                    <a href="<?= $router->generate('type_list') ?>"><li>Types</li></a>
                </ul>
            </nav>
        </header>

    
        <container class="pokemon_list">
            <?php foreach ($home_pokemon as $pokemonObject): ?>
                    <div class="pokemon_alone">
                    <a class="pokemon_link" href="<?= $router->generate('details') . $pokemonObject->getNumero() ?>">
                        <img class="pokemon_img" src="<?= $router->generate('images') . $pokemonObject->getNumero() ?>.png" alt="Pokémon n°<?php $pokemonObject->getNumero(); ?>">
                        <p class="pokemon_name">#<?= $pokemonObject->getNumero() . '   ' . $pokemonObject->getNom() ?></p></a>
                    </div>
            <?php endforeach; ?>
        </container>
</container>
</body>
</html>