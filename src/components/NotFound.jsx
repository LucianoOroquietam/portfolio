import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/home" className="go-home">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
