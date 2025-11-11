import peliculas from './peliculas.js'

// Filtro de películas por género -- Accion 28, Thriller 53, Aventura 12
const peliculasAccion = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28))
console.log(peliculasAccion)

const peliculasThriller = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53))
console.log(peliculasThriller)

const peliculasAventura = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12))
console.log(peliculasAventura)

// Poner titulo e imagen de las peliculas en el HTML

const contenedorAccion = document.getElementById("genero-28"); //hecho con forEach
    peliculasAccion.forEach((peliculaActual) =>  {
    let titulo = peliculaActual.title; // Data ha usado .map() 
    let poster = peliculaActual.poster_path;
    let URLimagen = "https://image.tmdb.org/t/p/w500" + poster;
    contenedorAccion.innerHTML += `<div class="contenedorTituloimg"><img src="${URLimagen}"></img><h1>${titulo}</h1></div>`;
})

const contenedorThriller = document.getElementById("genero-53"); //hecho con bucle for para ver la diferencia
for (let i = 0; i < peliculasThriller.length; i++) {
    let peliculaActual = peliculasThriller[i];
    let titulo = peliculaActual.title;
    let poster = peliculaActual.poster_path;
    let URLimagen = "https://image.tmdb.org/t/p/w500" + poster;
    contenedorThriller.innerHTML += `<div class="contenedorTituloimg"><img src="${URLimagen}"></img><h1>${titulo}</h1></div>`
}

const contenedorAventura = document.getElementById("genero-12");
for (let i = 0; i < peliculasAventura.length; i++) {
    let peliculaActual = peliculasAventura[i];
    let titulo = peliculaActual.title;
    let poster = peliculaActual.poster_path;
    let URLimagen = "https://image.tmdb.org/t/p/w500" + poster;
    contenedorAventura.innerHTML += `<div class="contenedorTituloimg"><img src="${URLimagen}"></img><h1>${titulo}</h1></div>`
}


// CORRECCION DATA
/*
const accion = document.getElementById("genero-28")
const thriller = document.getElementById("genero-53")
const aventura = document.getElementById("genero-12")

function pelisGenero (genero) {
    const pelisFiltradas = peliculas.filter(peli => peli.genre_ids.includes(genero)) //objeto.propiedad.método
    const mostrarPelis = pelisFiltradas.map(peli => {
        const urlBase = "https://image.tmdb.org/t/p/w500"
        const template = `
        <div class="card">
            <img src="${urlBase}${peli.poster_path}" alt=${peli.title} />
            <h3>${peli.title}<h3>
        </div>
        `
        return template
    }).join("")
    return mostrarPelis
}

accion.innerHTML = pelisGenero(28)
thriller.innerHTML = pelisGenero(53)
aventura.innerHTML = pelisGenero(12)
*/