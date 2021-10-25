import React, { useState} from 'react';
import deckArray from './DeckArray';
//import './App.css'
import {Player1, MainWrapper}  from './CardGameElements';

import  ContentWrapper from '../../wrapper/ContentWrapper';
// ska returna ett slumpmässigt kort i leken i form av ett index
function getRandomIndex(){
  return Math.floor((Math.random() * deckArray.cards.length));
}
/* const handleClickOne = () => {
  console.log('Hej från HC1')
  setCardTwo(getRandomIndex());
  setCardOne(getRandomIndex());
} */
//hello
function CardGame() {
  console.log('hej från App')
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [showCardOne, setShowCardOne] = useState(false);
  const [showCardTwo, setShowCardTwo] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleClickOne = () => {
    //console.log('Hej från HC1')
    
    setShowCardOne(true)
    setCardOne(getRandomIndex());
  }
  const handleClickTwo = () => {
    //console.log('Hej från HC1')
    setShowCardTwo(true)
    setCardTwo(getRandomIndex());
    setIsGameOver(true); 
  }

  const handleClickReset = () => {
    setShowCardOne(false)
    setCardOne(null);
    setShowCardTwo(false)
    setCardTwo(null);
    setIsGameOver(false);
  }

console.log(cardTwo);
// [0, 1, 2] 0 = inga kort syns, knappen säger starta
// vid klick kommer vi till läge 1. ett kort syns, knappen säger nästa kort
// vid klick vi till läge 2. bägge kort syns, knappen säger spela igen
// vid klick returneras vi till läge 0
  return (
    <MainWrapper>
      <div>
        {/* <MainWrapper> */}
      <h1>Highest card</h1>
      <hr />
      {showCardOne ? <CardOne key={1} 
      data={deckArray.cards} 
      index={cardOne}/> : null}
      {showCardTwo ? <CardTwo key={2} 
      data={deckArray.cards} 
      index={cardTwo}/> : null}

        {cardOne ? null : <ShowCardOne handleClickOne={handleClickOne}/> }
        {cardOne && !cardTwo? <ShowCardTwo handleClickTwo={handleClickTwo} /> : null }

        {/* {isGameOver ? <Winner dataOne={dataOne.card} dataTwo={dataOne.card} /> : null } */}
        {isGameOver ?  <GameOver handleClickReset={handleClickReset}/> : null }
       
       {/* {isGameOver
        ? <ShowCardOne handleClickOne={handleClickOne} />
        : <ShowCardTwo handleClickTwo={handleClickTwo} />
      } */}
       {/*cardTwo ? <CardTwo index='23' /> : null*/}
       {/*(showCard && isGameOver) ? null : null*/}
       {/* </MainWrapper> */}
      </div> 
    </MainWrapper>
  );
}

 const CardOne = (props) =>{
  
  return (<CardItem item={props.data[props.index]}/>
      
    )
}; 

const CardTwo = (props) =>{
  
  return (<CardItem item={props.data[props.index]}/>
      
    )
};

const Winner = (props) =>{
  const dataOne = props.dataOne.card
  const dataTwo = props.dataTwo.card

  if(dataOne > dataTwo){
          return(<p>Player one is the winner!</p>)
        }
    else if(dataTwo > dataOne){
          return( <p>Player two is the winner!</p>)
        } 
      else{ return(<p>No winner!</p>)} 
}

function CardItem(props){
  return(<div className="card" style={{color: props.item.color}}>
    <Player1>
    <span>{props.item.card}</span> <span>{props.item.suits}</span> 
    </Player1>
    </div>
    )
}



const ShowCardOne = (props) => { 
  console.log('Hej från HC1');
  return ( 
    <button 
      onClick={props.handleClickOne}> card one
    </button>
  );
}

const ShowCardTwo = (props) => { 
  console.log('Hej från HC2');
  return ( 
    <button 
    onClick={props.handleClickTwo}> card two
    </button>
  );
}

const GameOver = (props) => { 
  console.log('New Game');
  return ( 
    <button 
    onClick={props.handleClickReset}> New Game
    </button>
  );
}

export default CardGame;
