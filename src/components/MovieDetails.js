import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { useFavorites } from '../pages/FavoritesContext'; // Import the context

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addFavorite, removeFavorite } = useFavorites(); // Get the addFavorite and removeFavorite functions from the context

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=93995a9232ad6ced80265faeafc129b6`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const releaseDate = new Date(movie.release_date).toUTCString();

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
    if (!isFavorite) {
      addFavorite(movie); // Add movie to favorites if it's not already there
    } else {
      removeFavorite(movie.id); // Remove movie from favorites if it's already there
    }
  };

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p data-testid="movie-release-date">{releaseDate}</p>
        {movie.runtime && <p className="runtime">{movie.runtime} minutes</p>}
        <p className="overview">{movie.overview}</p>

        <button onClick={toggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
