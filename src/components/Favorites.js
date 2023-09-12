import React from 'react';
import { useFavorites } from '../pages/FavoritesContext';

const Favorites = () => {
  const { favoriteMovies } = useFavorites(); 

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovies.map(movie => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
