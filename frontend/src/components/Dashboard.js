import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Productos from './Productos';
import Ventas from './Ventas';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const usuario = location.state?.usuario;

  const [vista, setVista] = useState('productos');

  if (!usuario) {
    return <h3>No hay datos del usuario. Por favor, inicia sesión.</h3>;
  }

  return (
    <div className="container mt-4">
      <h2>Bienvenido, {usuario.nombre}</h2>
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        Volver al Inicio
      </button>
      <div className="mb-3">
        <button className="btn btn-outline-primary me-2" onClick={() => setVista('productos')}>
          Productos
        </button>
        <button className="btn btn-outline-success" onClick={() => setVista('ventas')}>
          Ventas
        </button>
      </div>

      {vista === 'productos' && <Productos />}
      {vista === 'ventas' && <Ventas />}
    </div>
  );
}

export default Dashboard;
