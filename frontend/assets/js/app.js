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
        // on pose un écouteur sur la vignette du pokemon
        pokelement.querySelector('.pokemon_alone').addEventListener('click', pokemon.details);
    },
    // Methode qui pose les écouteurs dans les détails des pokemon
    bindDetailsEvent: function() {
        // on pose un écouteur sur le bouton retour
        document.querySelector('.return_link').addEventListener('click', pokemon.list);
    },
    // Méthode qui pose lécouteur sur la vignette type en cours
    bindTypesEvents(pokelement) {
        // pose de l'écouteur
        pokelement.querySelector('.typelist').addEventListener('click', type.byType);
    },
    bindPopUpEvent(pokelement) {
        // pose de l'écouteur
        pokelement.querySelector('.return_link').addEventListener('click', pokemon.destroy);
    }
}

document.addEventListener('DOMContentLoaded', app.init);