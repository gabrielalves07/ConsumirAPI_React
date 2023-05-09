import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/exemple/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  };

  return (
    <Container>
      <Title>Login</Title>
      <Paragrafo>lorem ipsun dolor sit amet</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
