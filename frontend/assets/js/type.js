let type = {
    list: function() {
        // S'il n'y a pas d'élément .type dans le DOM
        if (!document.querySelector('.type')) {
            // On clean le board
            document.querySelector('.content').innerHTML = '';
        }

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
        
        // On le place dans le DOM
        document.querySelector('.type').appendChild(newType);
    },
}