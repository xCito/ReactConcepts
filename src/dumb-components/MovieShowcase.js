import React from 'react';
import MovieItem from './MovieItem';

const initialMovieList = [
    {name: 'Avengers', imgSrc: 'http://via.placeholder.com/50', rating: 5},
    {name: 'Shrek', imgSrc: 'http://via.placeholder.com/50', rating: 5},
    {name: 'Toy Story', imgSrc: 'http://via.placeholder.com/50', rating: 5},
    {name: 'Iron Man', imgSrc: 'http://via.placeholder.com/50', rating: 5},
    {name: 'Fast and Furious', imgSrc: 'http://via.placeholder.com/50', rating: 5},
];
export default function MovieShowcase() {
    const [movies, setMovies] = React.useState(initialMovieList);
    const movieInputRef = React.useRef(null);
    const ratingInputRef = React.useRef(null);

    function onSubmit(e) {
        console.log('movieRating');
        e.preventDefault();
        const movieName = movieInputRef.current.value;
        const movieRating = ratingInputRef.current.value;
        const newMovie = {
            name: movieName, 
            imgSrc: 'http://via.placeholder.com/50',
            rating: movieRating
        };
        setMovies([...movies, newMovie]);
        movieInputRef.current.value = '';
    }

    function removeMovie(idx) {
        const moviesClone = [...movies];
        moviesClone.splice(idx, 1);
        setMovies(moviesClone);
    }

    return (
        <div className="movie-list">
            <h5>List of Movies</h5>
            {movies.map((movie, i) => 
                <MovieItem key={'movieItem'+i}
                    id={i} 
                    name={movie.name} 
                    rating={movie.rating} 
                    imgSrc={movie.imgSrc} 
                    onRemove={removeMovie} />)}

            <form onSubmit={onSubmit}>
                <input ref={movieInputRef} placeholder="Enter Movie Name" />
                <input ref={ratingInputRef} type="range" min={1} max={5} />
            </form>
        </div>
    )
}
