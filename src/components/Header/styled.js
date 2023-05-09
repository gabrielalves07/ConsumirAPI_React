import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 18px;

  a {
    color: white;
    margin: 0 10px 0;
    font-weight: bold;
  }

  div {
    width: 45%;
    position: relative;
    left: 50%;
    translate: -50% 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
