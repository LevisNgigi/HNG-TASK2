import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, MoviePoster, MovieTitle, ReleaseDate } from '../MovieCardStyles';

const MovieCard = ({ movie, title, releaseDate, poster }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <CardContainer data-testid="movie-card">
        <MoviePoster data-testid="movie-poster" src={poster} alt={title} />
        <MovieTitle data-testid="movie-title">{title}</MovieTitle>
        <ReleaseDate data-testid="movie-release-date">Release Date: {releaseDate}</ReleaseDate>
      </CardContainer>
    </Link>
  );
};

export default MovieCard;
