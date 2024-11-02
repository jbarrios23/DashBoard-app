// src/modules/users/pages/UserDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const params = useParams<{ userId: string }>(); // Usamos un tipo genérico para los parámetros

  // Obtener el userId desde params
  const userId = params.userId;

  // Simulación de usuario, en un caso real esto vendría de un fetch o similar
  const user = { id: userId, name: 'Juan Pérez', email: 'juan@example.com' };

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link to={`/users/edit/${userId}`}>Editar Usuario</Link>
    </div>
  );
}

export default UserDetail;
