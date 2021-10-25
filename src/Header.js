import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyles = styled.div`
    display: flex;
    //flex-direction: row;
   /*  height: 60px;
    width: 100%; */
    //justify-content: space-between;
    //align-items: center;
    background-color: black;
    justify-content: space-between;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    
    & > ul {
        display: flex;
        flex-direction: row;
        height: 60px;
        /* width: 100%; */
        list-style-type: none;
        justify-content: space-around; 
        align-items: center;
        margin-right: 10px;
        background-color: black;
        font-size: 18px;
        
        
        
    }
    & > h1 {
        margin-left: 10px;
        color: #f9f9f9;
        
    }

    a{
        color: #f9f9f9;
    }
    
    a:link{
        
        text-decoration: none;
    }
`;


const Header = () => (
    <HeaderStyles>
        <h1>Anton Larsson-Auna</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>

            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </HeaderStyles>
);

export default Header;