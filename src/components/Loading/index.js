import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  // eslint-disable-next-line
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>
        <div className="loader-circle" />
      </span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: true,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
