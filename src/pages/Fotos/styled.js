import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    margin: 15px auto;
    cursor: pointer;
    border-radius: 50%;
    border: 2px dashed ${colors.primaryColor};
    overflow: hidden;

    img {
      width: 160px;
      height: 160px;
    }
  }

  input {
    display: none;
  }
`;
