import React, { useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/globalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" crossOrigin="" />
              ) : (
                <FaUserCircle size={38} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <div className="editAndClose">
              <Link to={`/aluno/${aluno.id}/edit`} size={16}>
                <FaEdit className="edit" />
              </Link>
              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose className="close" />
              </Link>
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
