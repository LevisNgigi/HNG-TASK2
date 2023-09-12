import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContainer, SearchInput, SearchButton, MovieGrid, MovieCard, MoviePoster } from '../MovieSearchStyles';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=93995a9232ad6ced80265faeafc129b6&query=${searchTerm}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
        setLoading(false);
      });
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies by title"
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {loading && <div>Loading...</div>}
      <MovieGrid>
        {searchResults.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard>
              <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </MovieCard>
          </Link>
        ))}
      </MovieGrid>
    </SearchContainer>
  );
};

export default MovieSearch;
