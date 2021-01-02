let app = {

    contentElement: document.querySelector('.content'),
    baseUrl: 'http://localhost:8080/',
    getFetchOptions: {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    },
    init: function() {
        pokemon.list();
        app.bindMenuEvents();
    },
    // Methode qui pose les écouteurs sur le menu de navigation
    bindMenuEvents: function() {
        // pose de l'écouteur sur "Pokedex"
        document.querySelector('.pokedex_home').addEventListener('click', pokemon.list);
        // pose de l'écouteur sur "Liste"
        document.querySelector('.pokedex_list').addEventListener('click', pokemon.list);
        // pose de l'écouteur sur "Types"
        document.querySelector('.pokedex_types').addEventListener('click', type.list);

    },
    // Methode qui pose les écouteurs sur les éléments de la liste des pokemon
    bindListEvents: function(pokelement) {
        // on récupère l'id du pokemon courant
        let pokemonId = pokelement.querySelector('.pokemon_alone').dataset.id;
        // console.log(pokemonId);
        // on pose un écouteur sur la vignette du pokemon
        pokelement.querySelector('.pokemon_alone').addEventListener('click', pokemon.details);
    },
    // Methode qui pose les écouteurs dans les détails des pokemon
    bindDetailsEvent: function(pokelement) {

    }
}

document.addEventListener('DOMContentLoaded', app.init);