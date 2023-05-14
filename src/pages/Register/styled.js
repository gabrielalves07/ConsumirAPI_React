import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
  }

  input {
    height: 35px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid lightgray;
    border-radius: 6px;
    margin-top: 4px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  button {
    margin-top: 15px;
    transition: all 0.4s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
