import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado,
  );

  return (
    <Nav>
      <div>
        <Link to="/" rel="noreferrer">
          <FaHome size={24} />
        </Link>
        <Link to="/login" rel="noreferrer">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/something" rel="noreferrer">
          <FaSignInAlt size={24} />
        </Link>
        {botaoClicado ? 'Clicado' : 'Não clicado'}
      </div>
    </Nav>
  );
}
