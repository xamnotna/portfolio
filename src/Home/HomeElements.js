import styled from 'styled-components';


export const contentWrapper = styled.div`
@media only screen and (max-width: 600px) {
    body {
        display: flex;
        flex-wrap: wrap;
      background-color: lightblue;
    }
  }

`


export const  StyledP = styled.p`
font-size: 30px;
color: #f9f9f9;
font-weight: 500;
line-height: 30px;
`

export const StyledDiv = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
/* flex-direction: column; */
align-items: center;
/* gap: 1rem; */
/* width: 100%; */

@media only screen and (max-width: 600px) {
    body {
        display: flex;
        width: 100%;
        height: 100%;
        height: auto;
       /*  font-height: 20px;
        font-weight: 50; */
        background-color: #333;

    }
  }

h1 {
text-align: left;
}
article  {
    //background-color: #333;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    font-size: 50px;
    text-align: left;
    padding: 50px;
    
    
}

.intro {
    & > h2{
    margin: 0;
    opacity: 0;
    width: 300px;
    height: 300px;
    left: 0vw;
    position: relative;
    animation: mymove 0.9s linear 0.5s 1 normal forwards;
    }
    & > p {
        margin: 0;
        width: 70%;
        font-size: 30px;
        color: #f9f9f9;
        font-weight: 500;
        line-height: 30px;
        left: 0vw;
        position: relative;
        animation: mymove 0.9s linear 0.5s 1 normal forwards;

    }
  }

  @keyframes mymove {
    0% {left: 0vw; opacity: 0.0;}
    50%{left: 15vw; opacity: 0.2;}
    80%{left: 25vw; opacity: 0.8;}
    100%{left: 30vw; opacity: 1;}

`
export const StyledAbout = styled.div`{
    
    z-index = 1;
    
    display: flex;
    
    flex-direction: column;
    /* flex-wrap: wrap;  */
    /*align-items: flex-start;*/
    /* align-self: auto; */
    /* align-items: flex-end */
    font-size: 20px;
    text-align: left;
    padding-left: 50px;


    & > p {
        /* align-items: flex-end */
        /* text-align: flex-end; */
        font-size: 30px;
        color: #f9f9f9;
        font-weight: 500;
        line-height: 30px;

    }
       
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
export const StyledDivColor = styled.div `
margin: 0;
padding: 0;
z-index: -1;
position: static;
background-color: #333;

/* height:0; */

/* border-left: 500px solid black;
border-right: 500px solid transparent;
border-bottom: 500px solid transparent;
border-top: 500px solid transparent; */
`

export const StyledProjects = styled.div`
postion: relative;
//padding: 20px;
//margin-top: 100px;
background-color: #333;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;


h1{
    text-align: flex-end;
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

export const StyledLi = styled.li`
display: flex;

align-items: center;
flex-basis: 50px;
padding-bottom: 15px;
font-size: 20px;
color: #f9f9f9;
border-radius: 10px;

`
//background: -webkit-linear-gradient(left, #333, #333 30%, black 30%, black);



