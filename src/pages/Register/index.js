import React, { useState } from 'react';
import { Form } from './styled';

import { Container } from '../../styles/globalStyles';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="buttonCreate">
          <button type="submit">Criar conta</button>
        </div>
      </Form>
    </Container>
  );
}
