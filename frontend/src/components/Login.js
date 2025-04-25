import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (usernameOrEmail === "usuario123" && password === "Contraseña123") {
      const usuario = { nombre: "Pablo Cabrera", email: "usuario123@email.com" };
      navigate("/dashboard", { state: { usuario } });
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-card card p-4 shadow-lg">
        <h2 className="text-center text-primary">Iniciar Sesión</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="usernameOrEmail" className="form-label">Usuario o Correo</label>
            <input
              type="text"
              className="form-control"
              id="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              placeholder="Ej: usuario123 o correo@ejemplo.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </form>

        <div className="extra-options text-center mt-3">
          <button className="btn btn-link" onClick={() => alert("Restablecer contraseña")}>¿Olvidaste tu contraseña?</button>
          <button className="btn btn-link" onClick={() => alert("Crear nuevo usuario")}>Crear una cuenta</button>
          <button className="btn btn-link text-secondary" onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
