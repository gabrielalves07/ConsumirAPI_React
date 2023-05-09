import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoutes({ component: Component, isClosed, ...rest }) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { PrevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoutes.defaultProps = {
  isClosed: false,
};

MyRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
