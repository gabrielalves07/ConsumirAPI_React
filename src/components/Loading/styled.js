import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  span {
    z-index: 2;

    .loader-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      height: 40px;
      width: 40px;
      animation: loader-circle 1s linear infinite;
      border-radius: 50%;
      border: 6px solid lightgray;
      border-top-color: ${colors.primaryColor};
    }

    @keyframes loader-circle {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
