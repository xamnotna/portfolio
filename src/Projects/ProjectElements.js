import styled from "styled-components";

export const MainWrapper = styled.div`

  & > div{
    box-sizing: border-box;
    padding: 1em;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & > section {
    /* width: 75%; */
    margin-top: 16px;
}

&  h2{
  text-align: center;    
  font-size: 20px;
  padding: 12px;
}
 
  & > h1{
    color: white;
    text-align: center;    
    font-size: 20px;
    padding: 12px;
  }

  & p{
    text-align: left;
    line-height: 24px;
    padding: 2em;
  }

  & button{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

`


export const TimeDiv = styled.div`

& > div{
  box-sizing: border-box;
  border: 1px solid red;
  padding: 1em;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  gap: 1rem;
}

& h2{
  text-align: center;    
  font-size: 18px;
  padding: 12px;
}

&  p{
 /*  border: 1px solid red;
  width: 2em; */
  
  line-height: 24px;
  padding: 1em;
  flex: 2;
 /*  display: flex;
  flex: 3; */
  text-align: center;
}

`