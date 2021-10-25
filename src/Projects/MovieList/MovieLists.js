import React, { useContext } from 'react'
import styled from 'styled-components';
import { NOW_PLAYING, TOP_RATED } from './data';
import MovieContext from './MovieContext';
import MovieItem from './MovieItem';
//import { FILTER } from './data'


const StyledUL = styled.ul`
display: flex;
list-style-type: none;
flex-wrap: wrap;
&>
:hover {
  background-color: gray;
}

`

const StyledMovieItem = styled(MovieItem)`
background-color: white;
font-weight: 700;


` 

function MovieLists() {
  let { setDisplay, data, headerText } = useContext(MovieContext);

 // const { setDisplay, data, headerText } = contextDataObject;

  return (  
              <div>
        <button onClick={() => setDisplay(NOW_PLAYING)}>NOW PLAYING</button>
        <button onClick={() => setDisplay(TOP_RATED)}>TOP RATED</button>
        
        <h1>{headerText}</h1>
        <StyledUL>
            {data.map(item => {
                return (<StyledMovieItem key={item.id} item={item} />)
            })}
        </StyledUL>
    </div>);
}

  
export default MovieLists;
 {/* <h1>MOVIES</h1>
{FILTER.map((myButton) => {
  return (
    <button value={myButton} onClick={handleFilter}>
      {myButton.split('/')[1].replace('_', ' ').toUpperCase()}
    </button>
  )
})} */}