function getPokemonOfFirstGeneration () {
    axios.get('https://pokeapi.co/api/v2/pokemon/charmander').then((charmanderResponse) => {
        const charmanderCard = document.getElementById('charmander-card');
        insertImgToCard(charmanderCard, charmanderResponse.data.sprites.front_default);
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/squirtle').then((squirtleResponse) => {
        const squirtleCard = document.getElementById('squirtle-card');
        insertImgToCard(squirtleCard, squirtleResponse.data.sprites.front_default);
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur').then((bulbasaurResponse) => {
        const bulbasaurCard = document.getElementById('bulbasaur-card');
        insertImgToCard(bulbasaurCard, bulbasaurResponse.data.sprites.front_default);
    });
}

function getPokemonOfSecondGeneration () {
    axios.get('https://pokeapi.co/api/v2/pokemon/cyndaquil').then((cyndaquilResponse) => {
        const cyndaquilCard = document.getElementById('cyndaquil-card');
        insertImgToCard(cyndaquilCard, cyndaquilResponse.data.sprites.front_default);
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/totodile').then((totodileResponse) => {
        const totodileCard = document.getElementById('totodile-card');
        insertImgToCard(totodileCard, totodileResponse.data.sprites.front_default);
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/chikorita').then((chikoritaResponse) => {
        const chikoritaCard = document.getElementById('chikorita-card');
        insertImgToCard(chikoritaCard, chikoritaResponse.data.sprites.front_default);
    });
}
function getPokemonOfThirdGeneration () {
    axios.get('https://pokeapi.co/api/v2/pokemon/torchic').then((torchicResponse) => {
        const torchicCard = document.getElementById('torchic-card');
        insertImgToCard(torchicCard, torchicResponse.data.sprites.front_default);
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/mudkip').then((mudkipResponse) => {
        const mudkipCard = document.getElementById('mudkip-card');
        insertImgToCard(mudkipCard, mudkipResponse.data.sprites.front_default);
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/treecko').then((treeckoResponse) => {
        const treeckoCard = document.getElementById('treecko-card');
        insertImgToCard(treeckoCard, treeckoResponse.data.sprites.front_default);
    });
}

function insertImgToCard(cardToInsert, imgUrl) {
    const imgHTML = document.createElement('img');
    imgHTML.src = imgUrl
    cardToInsert.prepend(imgHTML);
}


getPokemonOfFirstGeneration();
getPokemonOfSecondGeneration();
getPokemonOfThirdGeneration();