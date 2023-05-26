import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    toast.error('Você foi deslogado');
    history.push('/');
  };

  return (
    <Nav>
      <div>
        <Link to="/" rel="noreferrer">
          <FaHome size={24} />
        </Link>
        <Link to="/register" rel="noreferrer">
          <FaUserAlt size={24} />
        </Link>

        {isLoggedIn ? (
          <Link onClick={handleLogout} to="/login" rel="noreferrer">
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login" rel="noreferrer">
            <FaSignInAlt size={24} />
          </Link>
        )}

        {isLoggedIn && <FaCircle fontSize={18} color="lightgreen" />}
      </div>
    </Nav>
  );
}
