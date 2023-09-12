import React from 'react';
import { Container, Title, LoadingMessage } from '../pages/HomeStyles';
import MovieCard from '../components/MovieCard';
import MovieSearch from '../components/MovieSearch';
import '../MovieGridStyles.css'; 


const Home = ({ topMovies }) => {
  return (
    <Container>
      <Title>Top 10 Movies</Title>
      <MovieSearch />
      {topMovies ? (
        <div className="movie-grid"> {/* Apply the movie-grid class */}
          {topMovies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <LoadingMessage>Loading...</LoadingMessage>
      )}
    </Container>
  );
};

export default Home;