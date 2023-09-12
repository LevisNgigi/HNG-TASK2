import React from 'react';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';
import MovieSearch from '../components/MovieSearch';
import '../MovieGridStyles.css'; 


const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

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