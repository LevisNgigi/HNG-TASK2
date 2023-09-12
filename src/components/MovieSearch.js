import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 30px;
  border-radius: 50px;
  widith: 300px;

`;

const SearchButton = styled.button`
  padding: 5px 20px;
  border-radius: 50%;

`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const MovieCard = styled.div`
  text-align: center;
`;

const MoviePoster = styled.img`
  max-width: 100%;
`;

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
