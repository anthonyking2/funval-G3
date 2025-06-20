let contenedor = document.querySelector("#contenedor-cards");
let pokemons= [];

async function traerPokemons(){
    for (let i = 1; i <= 10; i++) {
    let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    console.log(data);
    pokemons.push(data);
}}