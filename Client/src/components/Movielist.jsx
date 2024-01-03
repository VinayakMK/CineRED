import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = ({ directorName }) => {
  const [movies, setMovies] = useState([]);
  const apiKey = "6ff5a1d6";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://www.omdbapi.com/', {
          params: {
            apikey: apiKey,
            director: directorName,
            type: 'movie'
          }
        });

        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
        } else {
          console.error(`Error: ${response.data.Error}`);
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchMovies();
  }, [apiKey, directorName]);

  return (
    <div>
      <h2>Movies directed by {directorName}:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
