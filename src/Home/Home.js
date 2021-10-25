import Weather from '../Weather'
import styled from 'styled-components';
import { contentWrapper, StyledP, StyledAbout, StyledProjects, StyledLi, StyledDivColor, StyledDiv} from './HomeElements';
import  ContentWrapper from '../wrapper/ContentWrapper';
import gitlogo from '../gitimg.png';
import Projects from '../Projects/Projects'; 
import  { MainWrapper } from '../Projects/ProjectElements';

//#region 

/* const StyledP = styled.p`
font-size: 30px;
color: #f9f9f9;
font-weight: 500;
line-height: 30px;
`

const StyledDiv = styled.div`

h1 {
text-align: left;
}
article  {
    background-color: #333;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    font-size: 50px;
    text-align: left;
    padding: 50px;
    
    
}

.intro {
    
    opacity: 0;
    width: 300px;
    height: 300px;
    left: 0vw;
    position: relative;
    animation: mymove 0.9s linear 0.5s 1 normal forwards;
    
  }

  @keyframes mymove {
    0% {left: 0vw; opacity: 0.0;}
    50%{left: 25vw; opacity: 0.2;}
    80%{left: 35vw; opacity: 0.8;}
    100%{left: 40vw; opacity: 1;}

`
const StyledAbout = styled.div`{
    
    z-index = 1;
    
    display: flex;
    
    flex-direction: column;
    flex-wrap: wrap; 
    align-items: flex-start;
    align-self: auto;
    font-size: 20px;
    text-align: left;
       
}


h1{
    
    padding-bottom: 50px;
    color: #f9f9f9;
    font-weight: 600;
    font-size: 76px;
    line-height: 88px;
    overflow: visible;
    margin-bottom: 15px;
    margin-left: 50px;
}

`
const StyledDivColor = styled.div `
margin: 0;
padding: 0;
z-index: -1;
position: static;
background-color: #333;

height:0;

border-left: 500px solid black;
border-right: 500px solid transparent;
border-bottom: 500px solid transparent;
border-top: 500px solid transparent;
`

const StyledProjects = styled.div`
postion: relative;
//padding: 20px;
//margin-top: 100px;
background-color: #333;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

h1{
    text-align: center;
    padding-bottom: 10px;
    color: #f9f9f9;
    font-weight: 600;
    font-size: 76px;
    line-height: 88px;
    overflow: visible;
    margin-bottom: 15px;
    margin-left: 50px;
}

`

const StyledLi = styled.li`
display: flex;

align-items: center;
flex-basis: 50px;
padding-bottom: 15px;
font-size: 20px;
color: #f9f9f9;
border-radius: 10px;
 
`*/
//background: -webkit-linear-gradient(left, #333, #333 30%, black 30%, black);
//#endregion

function Home() {
    return(
        <ContentWrapper>
       
        <StyledDiv>
        
        
        <article>
            <Weather/>
            <div className="intro">
                <h2>Front End Developer</h2>
                <p>{`Hello my name is Anton, \n
                    right now I'm a Student at KYH.
                    Future Front End Developer.
                    `}
                </p>
            </div>
        </article>
        <StyledDivColor>
        <section> 
            

            <StyledAbout>
               
            <h1>What About me?</h1>
            <p>
                I live in Märsta, north of Stockholm.
            </p>
            <p>
                I'm studing to become a Front End Developer at KYH.
                </p>
                <p>
                Things I learned: JavaScript, HTML, CSS, UX/UI and REACT.
                </p>
                <p>
                I like to come up with clean and good UI-designs. Making projects in JavaScript
                and REACT.
                </p>
                
                </StyledAbout>
                
        </section>
        <br/>
        <div>
        <Projects/>
        </div>
        </StyledDivColor>
       
        
       
        <StyledProjects>
        
        
        
        <h1>Contact info</h1>
           <StyledLi>
                <span> Email: antonlarssonauna@gmail.com </span>
                </StyledLi>
                <StyledLi>
             <img src={gitlogo} width="100%" alt="gitHub link"/>
             </StyledLi>
               
        </StyledProjects>
        </StyledDiv>
       
     
        </ContentWrapper>
        
    );
};

export default Home;