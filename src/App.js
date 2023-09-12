import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import MovieSearch from './components/MovieSearch';
import Sidebar from './components/Sidebar';
import { FavoritesProvider } from './pages/FavoritesContext';
import Favorites from './components/Favorites'; 


const App = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=93995a9232ad6ced80265faeafc129b6';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTopMovies(data.results.slice(0, 10)))
      .catch(error => console.error('Error fetching top movies:', error));
  }, []);

  return (
    <FavoritesProvider> {/* Wrap your entire app with FavoritesProvider */}
      <div className="App">
        <Router>
          <div id="wrapper">
            <Sidebar />
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Home topMovies={topMovies} />} />
                  <Route path="/movies/:id" element={<MovieDetails />} />
                  <Route path="/search-results" element={<MovieSearch />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </FavoritesProvider>
  );
};

export default App;
