import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <div>
        <Link to="/" rel="noreferrer">
          <FaHome size={24} />
        </Link>
        <Link to="/register" rel="noreferrer">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/login" rel="noreferrer">
          <FaSignInAlt size={24} />
        </Link>
      </div>
    </Nav>
  );
}
