import React from 'react';

import { Error } from './styled';

export default function Page404() {
  return (
    <Error>
      <h1>
        Page <span>not found</span>
      </h1>
      <h3>Error 404 : (</h3>
    </Error>
  );
}
