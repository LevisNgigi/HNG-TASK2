import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=93995a9232ad6ced80265faeafc129b6`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  // Convert release date to UTC format
  const releaseDate = new Date(movie.release_date).toUTCString();

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
      </div>
    </div>
  );
};

export default MovieDetails;