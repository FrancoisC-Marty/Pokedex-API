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


    <section class="details">
        <h1>Détails de <?= $details_pokemon['pokemon_infos'][0]['nom'] ?></h1>
            <div class="details_pokemon">
                <img src="<?= $router->generate('images') . $details_pokemon['pokemon_infos'][0]['numero'] ?>.png" alt="">
                <div class="details_caracs">
                    <h2># <?= $details_pokemon['pokemon_infos'][0]['numero'] . ' ' . $details_pokemon['pokemon_infos'][0]['nom'] ?></h2>
                    <div class="stickers">
                    <?php foreach($details_pokemon['pokemon_type'] as $currentType): ?>
                        <style>
                            <?= '.' . $currentType['type_name'] ?> {
                                background-color: #<?= $currentType['type_color'] ?> 
                            }
                        </style>
                        <p class="sticker <?= $currentType['type_name'] ?>"><?= $currentType['type_name'] ?></p>
                    <?php endforeach; ?>
                    </div>
                    <h3>Statistiques</h3>
                    <?php foreach($details_pokemon['pokemon_stats'][0] as $info => $currentPokemon): ?>

                        <div class="stat-container">
                            <p class="stat_name"><?= $info ?></p>
                            <p class="stat_num"><?= $currentPokemon ?></p>
                            <div class="barre-container">    
                                <div class="barre__progress" style="width: <?= (intval($currentPokemon) / 255) * 100 ?>%;" ></div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                </div>

            </div>
        <a class="return_link" href="<?= $router->generate('home') ?>">Revenir à la liste</a>
    </section>

</container>

</body>
</html>