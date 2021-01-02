let pokemon = {
    // methode qui récupère les données de tous les pokemon
    list: function() {
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
            function (pokemons) {
                pokemons.forEach(element => pokemon.create(element));
            }
        )
    },
    create: function (pokemon) {
        // On clone notre le contenu de notre template "empty-pokemon"
        let newPokemon = document.getElementById('empty-pokemon').content.cloneNode(true);

        // On défini l'attribut source de l'image afin de récupérer l'image du pokemon courant
        newPokemon.querySelector('.pokemon_img').setAttribute('src', 'assets/img/' + pokemon.id + '.png');
        // On défini l'attribut "alt" de l'image
        newPokemon.querySelector('.pokemon_img').setAttribute('alt', pokemon.nom + '.png');
        // On défini le nom et le numéro du pokémon
        newPokemon.querySelector('.pokemon_name').textContent = '#' + pokemon.id + ' ' + pokemon.nom;
        // on pose les écouteurs sur notre nouveau pokemon
        app.bindListEvents(newPokemon);
        // on place notre nouvel élément dans le DOM
        document.querySelector('.pokemon_list').appendChild(newPokemon);
    }
}