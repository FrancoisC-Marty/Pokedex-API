let pokemon = {
    // methode qui récupère les données de tous les pokemon
    list: function() {
        // S'il n'y a pas d'élément .pokemon_alone dans le DOM
        if (!document.querySelector('.pokemon_alone')) {
            // On clean le board
            document.querySelector('.content').innerHTML = '';
            
            let container = document.createElement('container');
            
            container.classList.add('pokemon_list');
            
            app.contentElement.appendChild(container);
            
            request = fetch(app.baseUrl, app.getFetchOptions);
            
            request.then(
                function(response) {
                    return response.json()
                }
                )
                
                .then(
                    function(pokemons) {
                        pokemons.forEach(element => pokemon.create(element));
                    }
                    )
        }
    },
    create: function(pokemon) {
        // On clone notre le contenu de notre template "empty-pokemon"
        let newPokemon = document.getElementById('empty-pokemon').content.cloneNode(true);

        // On défini l'attribut source de l'image afin de récupérer l'image du pokemon courant
        newPokemon.querySelector('.pokemon_img').setAttribute('src', 'assets/img/' + pokemon.id + '.png');
        // On défini l'attribut "alt" de l'image
        newPokemon.querySelector('.pokemon_img').setAttribute('alt', pokemon.nom + '.png');
        // On défini le nom et le numéro du pokémon
        newPokemon.querySelector('.pokemon_name').textContent = '#' + pokemon.id + ' ' + pokemon.nom;
        // on applique un dataset a notre pokemon
        newPokemon.querySelector('.pokemon_alone').dataset.id = pokemon.id;
        // on pose les écouteurs sur notre nouveau pokemon
        app.bindListEvents(newPokemon);
        // on place notre nouvel élément dans le DOM
        document.querySelector('.pokemon_list').appendChild(newPokemon);
    },
    details: function(evt) {
        // on clean l'écran pour l'affichage des détails
        document.querySelector('.content').innerHTML = '';

        // on cible l'element cliqué par le user
        let currentPokemon = evt.currentTarget;
        // On cible le '.pokemon_alone' le plus proche du clique (soit la vignette du pokemon cliqué)
        let details = currentPokemon.closest('.pokemon_alone');
        // on récupère l'ID du pokemon ciblé
        let pokemonId = details.dataset.id;

        // console.log(pokemonId);

        request = fetch(app.baseUrl + '/pokemon/' + pokemonId, app.getFetchOptions);

        request.then(
            function(response) {
                return response.json();
            }
        )

        .then (
            function(currentPokemon) {
                pokemon.detailsDisplay(currentPokemon);
            }
        )
    },
    detailsDisplay: function(currentPokemon) {
        // on clone le template "empty-details"
        let newPokemon = document.getElementById('empty-details').content.cloneNode(true);
        // on rempli les différentes infos
        newPokemon.querySelector('.details_pokemon--name').textContent = currentPokemon.nom;
        newPokemon.querySelector('.details_pokemon--img').setAttribute('src', 'assets/img/' + currentPokemon.id + '.png');
        newPokemon.querySelector('.details_pokemon--img').setAttribute('alt', currentPokemon.nom + '.png');
        newPokemon.querySelector('.details_pokemon--number-name').textContent = '#' + currentPokemon.id + ' ' + currentPokemon.nom;
        
        // on place notre élément dans le DOM
        app.contentElement.appendChild(newPokemon);
        // console.log(currentPokemon.types);

        // On boucle sur les infos de types et on appel la méthode qui crée les stickers
        currentPokemon.types.forEach(element => pokemon.sticker(element));

        // on appel la méthode de création de stat avec les différentes stats de notre pokemon
        pokemon.createStat('pv', currentPokemon.pv)
        pokemon.createStat('attaque', currentPokemon.attaque);
        pokemon.createStat('defense', currentPokemon.defense);
        pokemon.createStat('attaque_spe', currentPokemon.attaque_spe);
        pokemon.createStat('defense_spe', currentPokemon.defense_spe);
        pokemon.createStat('vitesse', currentPokemon.vitesse);

        // on appel la méthode qui pose l'écouteur sur le bouton retour
        app.bindDetailsEvent();

    },
    sticker: function(type) {
        let newType = document.createElement('p');

        newType.textContent = type.name;
        newType.style.backgroundColor = '#' + type.color;
        newType.classList.add('sticker');

        document.querySelector('.stickers').appendChild(newType);
    },
    createStat(statName, value) {
        // on clone le template "empty stat"
        let newStat = document.getElementById('empty-stat').content.cloneNode(true);

        // On saisie les infos de la stat courante
        newStat.querySelector('.stat_name').textContent = statName;
        newStat.querySelector('.stat_num').textContent = value;
        newStat.querySelector('.barre__progress').style.width = (value / 255) * 100 + '%';

        // On place notre stat dans le DOM
        document.querySelector('.stats').appendChild(newStat);
    },
}