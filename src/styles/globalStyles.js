import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: arial, helvetica, verdana, sans-serif;
  }

  html, body, #root{
    height: 100%;
    background-color: ${colors.primaryDarkColor};
  }

  button{
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: white;
    padding: 10px 18px;
    font-size: 16px;
    border-radius: 4px;
  }

  h1{
    color: ${colors.primaryColor};
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  p{
    margin: 5px 0;
    color: black;
  }

  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 550px;
  background-color: white;
  margin: 30px auto;
  padding: 20px 25px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;
