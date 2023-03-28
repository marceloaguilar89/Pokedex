function getPicUrl(url) {
    //url string
    const pokamionId = url.split('/')[6];
    console.log(pokamionId);
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokamionId+".png"
    return imgUrl;
}

function generatePokemonCard (pokamion, urlImg) {
    const pokamionCard = '<div class="col-md-3 col-sm-12">'+
                            '<div class="card" >'+
                                '<img src="'+urlImg+'"></img>'+
                                '<div class="card-body" id="charmander-card">'+
                                    '<h5 class="card-title">'+
                                        pokamion.name  
                                    '</h5>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
    return pokamionCard;
}

function insertHtmlToPokemonContainer(pokamionCard) {
    const container = document.getElementById('pokemon-container');
    container.innerHTML = container.innerHTML + pokamionCard;
}

function getPokemonInfo () {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0').then((pokeInfoResponse) => {
        const pokamions = pokeInfoResponse.data.results;
        for (const pokamion of pokamions) {
            const urlOfPokemon = getPicUrl(pokamion.url);
            const pokamionCard = generatePokemonCard(pokamion, urlOfPokemon);
            insertHtmlToPokemonContainer(pokamionCard);
        }

    });
}


getPokemonInfo()