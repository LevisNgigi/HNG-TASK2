import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addFavorite = (movie) => {
    setFavoriteMovies(prevFavorites => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavoriteMovies(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteMovies, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
