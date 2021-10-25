import styled from 'styled-components';
import gitlogo from './gitimg.png'; 
const StyledDiv = styled.div`
background-color: #333;
width: auto;
height: 100vh;
`
    

const StyledProjects = styled.div`
postion: relative;
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
    margin 15px;
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
`

function Contact() {
    return(
        <StyledDiv>
        <StyledProjects>
        <h1>Contact info</h1>
           <StyledLi>
                <span> Email: antonlarssonauna@gmail.com </span>
                </StyledLi>
                <StyledLi>
                <a href="https://github.com/xamnotna">
             <img src={gitlogo}  width="100%" alt="gitHub link"/>
             </a>
             </StyledLi>
               
        </StyledProjects>
        </StyledDiv>
       
     
    );
};

export default Contact;