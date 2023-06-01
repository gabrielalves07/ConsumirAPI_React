import React, { useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamationTriangle,
} from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/globalStyles';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const confirm = e.currentTarget.nextSibling;
    confirm.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleConfirm = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
      toast.success('Aluno excluído');
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        setIsLoading(false);
        toast.error('Você não está logado');
      } else {
        setIsLoading(false);
        toast.error('Ocorreu algum erro ao excluir o aluno');
      }
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to="/aluno">Adicionar novo aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" crossOrigin="" />
              ) : (
                <FaUserCircle size={55} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <div className="editAndClose">
              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit className="edit" size={16} />
              </Link>
              <Link to={`/aluno/${aluno.id}/delete`} onClick={handleDeleteAsk}>
                <FaWindowClose className="close" size={16} />
              </Link>

              <FaExclamationTriangle
                className="confirm"
                display="none"
                cursor="pointer"
                size={16}
                onClick={(e) => handleConfirm(e, aluno.id, index)}
              />
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
