document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = 'cbc2477fe7afae718516aff70e8a740d'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let url_imagen = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

function searchMovies(){
    resultContainer.innerHTML = 'Loading...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No search result</p>'
        return 
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'Released in ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = url_imagen + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath


        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)

    });
}
