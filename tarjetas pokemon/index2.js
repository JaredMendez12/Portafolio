import { Tarjetas } from "./tarjeta.js";
const url = 'https://pokeapi.co/api/v2/pokemon/';

window.onload = async () =>{
    await getPokemones ();
}

const getPokemones = async () =>{
    const peticion = await fetch(url);
    if(peticion.ok){
        const info = await peticion.json();
        const pokemones = info.results;
        let tabla = '';
        pokemones.forEach( async (pok,i) => {
            const card = new Tarjetas(3,pok.name,pok.url);
            const pokeTarjeta = await card.mostrar();
            document.getElementById('fila').innerHTML += pokeTarjeta;
        });
    }

}