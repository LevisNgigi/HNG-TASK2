import React, { useContext } from 'react';
import { FavoritesContext } from '../pages/FavoritesContext';
import '../App.css'; // Create a CSS file for styling

const Favorites = () => {
  const { favoriteMovies } = useContext(FavoritesContext);

  return (
    <div className="favorites-grid"> {/* Apply a class for styling */}
      <h2>Favorite Movies</h2>
      {favoriteMovies.map(movie => (
        <div key={movie.id} className="movie-card"> {/* Apply a class for styling */}
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
