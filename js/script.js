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
    let titulo = peliculaActual.title;
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
    let peliculaActual = peliculasAccion[i];
    let titulo = peliculaActual.title;
    let poster = peliculaActual.poster_path;
    let URLimagen = "https://image.tmdb.org/t/p/w500" + poster;
    contenedorAventura.innerHTML += `<div class="contenedorTituloimg"><img src="${URLimagen}"></img><h1>${titulo}</h1></div>`
}