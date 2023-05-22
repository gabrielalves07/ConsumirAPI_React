import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Form } from './styled';
import { Container } from '../../styles/globalStyles';

import Loading from '../../components/Loading/index';

import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  const handlesubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('O campo "Nome" deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('O campo "Senha" deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));

    /*
      setIsLoading(true);
    try {
      await axios.post('/users/', {
        nome,
        email,
        password,
      });
      toast.success('Usuário cadastrado com sucesso');
      setIsLoading(false);
      history.push('/login/');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((erro) => toast.error(erro));
      setIsLoading(false);
    }
    */
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
      <Form onSubmit={handlesubmit}>
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
          <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>
        </div>
      </Form>
    </Container>
  );
}
