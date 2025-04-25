import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="inicio-container d-flex flex-column justify-content-center align-items-center">
      <div className="text-center card p-5 shadow-lg">
        <h1 className="text-primary mb-3">Sistema de Ventas</h1>
        <p className="lead">Gestioná tus productos y ventas de forma eficiente.</p>
        <button className="btn btn-outline-primary mt-3" onClick={redirectToLogin}>
          Iniciar sesión
        </button>
      </div>

      <footer className="footer mt-5 text-muted text-center">
        <small>© 2025 Sistema de Ventas - Todos los derechos reservados</small>
      </footer>
    </div>
  );
};

export default Inicio;
