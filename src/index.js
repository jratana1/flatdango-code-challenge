const url = "http://localhost:3000/films"
const title= document.getElementById('title')
const runtime= document.getElementById('runtime')
const info= document.getElementById('film-info')
const showtime= document.getElementById('showtime')
const ticketsLeft= document.getElementById('ticket-num')
const buyButton= document.querySelector(".ui .button")

let films={}


async function fetchMovies() {
    const response = await fetch('http://localhost:3000/films');
    const movies = await response.json();
    return movies;
  }
  
window.onload = async () => {
    films = await fetchMovies();
    title.innerText=films[0].title
    runtime.innerText=films[0].runtime + " minutes"
    info.innerText=films[0].description
    showtime.innerText=films[0].showtime
    ticketsLeft.innerText=`${films[0].capacity - films[0].tickets_sold}`
};

buyButton.addEventListener("click", function() {
    if (films[0].capacity - films[0].tickets_sold > 0){
        films[0].tickets_sold += 1
        ticketsLeft.innerText=`${films[0].capacity - films[0].tickets_sold}`
    }
  });

