// src/modules/users/pages/UserDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'Ana García', email: 'ana@example.com' },
];

const UserDashboard: React.FC = () => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
