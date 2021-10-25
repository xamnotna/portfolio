import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/Routes";
import  { MainWrapper } from './ProjectElements';

import  ContentWrapper from '../wrapper/ContentWrapper';

function Projects() {

    return(
        

         <MainWrapper>
            <h1>Projects I Made!</h1>
           
                <div>


                    <Link to={ROUTES.CARDGAME}><button>Card Game</button></Link>
                    <Link to={ROUTES.SEARCHTERMS}><button>Serch Terms</button></Link>
                    <Link to={ROUTES.MOVIELIST}><button>movie database</button></Link>
                    
                </div>
            </MainWrapper>
       
    )
}

export default Projects;