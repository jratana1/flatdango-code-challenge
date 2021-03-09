const url = "http://localhost:3000/films"
const title= document.getElementById('title')
const runtime= document.getElementById('runtime')
const info= document.getElementById('film-info')
const showtime= document.getElementById('showtime')
const ticketsLeft= document.getElementById('ticket-num')
const buyButton= document.querySelector(".ui .button")
const movieList= document.querySelector(".ui .list")
const poster= document.getElementById('poster')
let films=[]
let movieId = 0


async function fetchMovies() {
    const response = await fetch('http://localhost:3000/films');
    const movies = await response.json();
    return movies;
  }

function listMovies(){
    movieList.innerHTML=""
    films.forEach(movie => {
        let li = document.createElement("LI");    
        li.id = movie.id
        let textnode = document.createTextNode(`${movie.title}`);        
        li.appendChild(textnode);                             
        movieList.appendChild(li);
    })
}
  
window.onload = async () => {
    films = await fetchMovies();
    title.innerText=films[0].title
    runtime.innerText=films[0].runtime + " minutes"
    info.innerText=films[0].description
    showtime.innerText=films[0].showtime
    ticketsLeft.innerText=`${films[0].capacity - films[0].tickets_sold}`
    poster.src = `${films[0].poster}`
    listMovies()
};

buyButton.addEventListener("click", function() {
    if (films[movieId].capacity - films[movieId].tickets_sold > 0){
        films[movieId].tickets_sold += 1
        ticketsLeft.innerText=`${films[movieId].capacity - films[movieId].tickets_sold}`
    }
  });

movieList.addEventListener("click", function(event) {
    movieId= parseInt(event.target.id) -1 
    title.innerText=films[movieId].title
    runtime.innerText=films[movieId].runtime + " minutes"
    info.innerText=films[movieId].description
    showtime.innerText=films[movieId].showtime
    ticketsLeft.innerText=`${films[movieId].capacity - films[movieId].tickets_sold}`
    poster.src = `${films[movieId].poster}`
  });

