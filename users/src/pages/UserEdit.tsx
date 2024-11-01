// src/modules/users/pages/UserEdit.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UserEdit: React.FC = () => {
  // Utilizamos useParams para obtener el userId, usando un tipo genérico
  const params = useParams<{ userId: string }>();
  const userId = params.userId;

  // Estado del usuario, normalmente deberías cargar los datos desde un API
  const [user, setUser] = useState({ name: 'Juan Pérez', email: 'juan@example.com' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    // Lógica para guardar los cambios en el backend
    console.log('Usuario guardado:', { userId, ...user });
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}

export default UserEdit;
