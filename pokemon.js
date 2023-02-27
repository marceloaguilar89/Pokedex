function getPokemonInfo () {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0').then((pokeInfoResponse) => {
        console.log(pokeInfoResponse);
    });
}

getPokemonInfo()