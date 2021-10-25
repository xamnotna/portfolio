import { useState, useEffect } from 'react';
import React from 'react';

//import ACTOR_DATA, { API_URL, NOW_PLAYING ,MOVIE ,TOP_RATED, API_KEY, SETTINGS } from './data.js';
import { API_URL, NOW_PLAYING, TOP_RATED, API_KEY, SETTINGS } from './data.js'
import Bar from './Bar';
import MovieLists from './MovieLists';
import MovieContext from './MovieContext';


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [display, setDisplay] = useState(NOW_PLAYING);

  useEffect(() => {
    
    fetch(API_URL + display + API_KEY + SETTINGS)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [display])
  
const contextDataObject = { 
  data: movies, 
  headerText: (display == NOW_PLAYING ? 'Now playing' : 'Top Rated'),
  setDisplay}
  


  return (
    <>
    <MovieContext.Provider value ={contextDataObject}>
      
      <div>
        <h1>Movie List</h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <Bar />

        <MovieLists />
       
      </div>
      </MovieContext.Provider>
    </>
  );
}





export default MovieList;