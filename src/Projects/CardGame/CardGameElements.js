import styled from 'styled-components';


export const Player1 = styled.div
`  {
  
    display: flex;
    align-items: center;
    display: inline-block;
    width: 150px;
    position: relative;
    border: 4px black solid;
    border-radius: 10px; 
    
  
  
   & span {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-basis: 50px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 15px;
    margin: 12px;
    font-size: 20px;
  }
}
  `

  export const MainWrapper = styled.div `
  {
    display: flex;
    flex-direction: collumn;
    justify-content: center;
  }`
  
  export const player2 = styled.div ` {
    
    display: inline-block;
    width: 150px;
    position: relative;
    border: 4px black solid;
    border-radius: 10px; 
    
  }
  
  .player2 span {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-basis: 50px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 15px;
    margin: 12px;
    font-size: 20px;
  }`
