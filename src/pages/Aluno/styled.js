import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

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

export const ProfilePicture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 15px 0;
  img {
    width: 150px;
    border-radius: 50%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryColor};
    padding: 8px;
    color: white;
    border-radius: 50%;
    position: absolute;
    bottom: 13px;
    right: 36%;
  }
`;
