import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home/Home';
//import Weather from './Weather';
import Contact from './Contact'; 
import Header from './Header';
import Projects from "./Projects/Projects";
import CardGame from "./Projects/CardGame/CardGame";
import SearchTerms from "./Projects/SearchTerms/SearchTerms";
import MovieList from './Projects/MovieList/MovieList';
import './App.css';
import * as ROUTES from './constants/Routes';


import  { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css?family=Nunito|Roboto');
*{
  margin: 0;
  padding: 0;
  
}
body {
  background-color: #333;
  padding: 0;
  margin: 0;
  font-family: Nunito, Roboto, sans-serif;
}}
`;

function App() {
  return (
    <>
     <GlobalStyle />
    <div>
      <Router>
      <Header />
       <Switch>
       <Route path='/contact'>
              <Contact />
        </Route>

        <Route exact path={ROUTES.PROJECTS}>
              <Projects/>
        </Route>

        <Route exact path={ROUTES.CARDGAME}>
              <CardGame/>
        </Route>

        <Route exact path={ROUTES.SEARCHTERMS}>
              <SearchTerms/>
        </Route>

        <Route exact path={ROUTES.MOVIELIST}>
              <MovieList/>
        </Route>

     
         <Route path='/'>
              <Home />
         </Route>

       </Switch>
     
     </Router>
    </div>
    </>
  );
}



export default App;
