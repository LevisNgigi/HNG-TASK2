import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
`;

const MovieCard = ({ movie, title, releaseDate, poster }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <CardContainer data-testid="movie-card">
        <MoviePoster data-testid="movie-poster" src={poster} alt={title} />
        <h2 data-testid="movie-title">{title}</h2>
        <p data-testid="movie-release-date">Release Date: {releaseDate}</p>
      </CardContainer>
    </Link>
  );
};

export default MovieCard;
