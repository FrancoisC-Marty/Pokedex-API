let type = {
    list: function() {
        // S'il n'y a pas d'élément .type dans le DOM
        if (!document.querySelector('.type')) {
            // On clean le board
            document.querySelector('.content').innerHTML = '';
            
            // On clone notre template "empty-type"
            let newType = document.getElementById('empty-type').content.cloneNode(true);
            
            // on place notre template dans le DOM
            app.contentElement.appendChild(newType);
            
            request = fetch(app.baseUrl + 'types', app.getFetchOptions);
            
            request.then(
                function(response) {
                    return response.json()
                }
                )
                
                .then(
                    function(types) {
                        types.forEach(element => type.create(element));
                    }
                    )
        }
    },
    create: function(currentType) {
        // On clone le template "empty-type"
        let newType = document.getElementById('empty-type--indiv').content.cloneNode(true);

        newType.querySelector('.typelist').dataset.id = currentType.id;

        // on cible la div "onetype" de notre fragment de document
        let thisType = newType.querySelector('.onetype');

        // on lui attribu son nom, style et class perso
        thisType.classList.add('onetype-' + currentType.name);
        thisType.style.backgroundColor = '#' + currentType.color;
        thisType.textContent = currentType.name;
        // on ratache notre div "onetype" customisée à l'élément a de notre fragment
        newType.querySelector('.type_link').appendChild(thisType);
        
        //on place les écouteurs
        app.bindTypesEvents(newType);
        // On le place dans le DOM
        document.querySelector('.type').appendChild(newType);
    },
    byType: function(evt) {
        // on clean le board
        document.querySelector('.content').innerHTML = '';

        // on cible l'element cliqué par le user
        let currentType = evt.currentTarget;
        // On cible le '.typelist' le plus proche du clique (soit la vignette du type cliqué)
        let details = currentType.closest('.typelist');
        // on récupère l'ID du type ciblé
        let typeId = details.dataset.id;

        // console.log(typeId);

        let container = document.createElement('container');

        container.classList.add('pokemon_list');

        app.contentElement.appendChild(container);

        request = fetch(app.baseUrl + '/type/' + typeId, app.getFetchOptions);

        request.then(
            function(response) {
                return response.json();
            }
        )

        .then (
            function(currentType) {
                currentType.forEach(element => type.typeDisplay(element));
            }
        )
    },
    typeDisplay: function(pokemon) {
        // On clone notre le contenu de notre template "empty-pokemon"
        let newPokemon = document.getElementById('empty-pokemon').content.cloneNode(true);

        // On défini l'attribut source de l'image afin de récupérer l'image du pokemon courant
        newPokemon.querySelector('.pokemon_img').setAttribute('src', 'assets/img/' + pokemon.pokemon_id + '.png');
        // On défini l'attribut "alt" de l'image
        newPokemon.querySelector('.pokemon_img').setAttribute('alt', pokemon.nom + '.png');
        // On défini le nom et le numéro du pokémon
        newPokemon.querySelector('.pokemon_name').textContent = '#' + pokemon.pokemon_id + ' ' + pokemon.nom;
        // on applique un dataset a notre pokemon
        newPokemon.querySelector('.pokemon_alone').dataset.id = pokemon.pokemon_id;
        // on pose les écouteurs sur notre nouveau pokemon
        app.bindListEvents(newPokemon);
        // on place notre nouvel élément dans le DOM
        document.querySelector('.pokemon_list').appendChild(newPokemon);
    }
}
