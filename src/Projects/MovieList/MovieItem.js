import styled from "styled-components";

import { IMAGE_URL } from './data';

  const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 200px;
  padding: 15px;
  margin: 12px;
  border: 3px black solid;
  border-radius: 10px;
  &>img {
      border-radius: 10px;
}
  `

  

function MovieItem(props) {
    
    return(<>
    
    <StyledLi className={props.className}>
      <img src={IMAGE_URL +props.item.poster_path} width="100%" alt="Movie Poster"/>
      <span>{props.item.title}</span> <span>{props.item.release_date}</span>
    </StyledLi>
    
    </>)
    
  }

  export default MovieItem;