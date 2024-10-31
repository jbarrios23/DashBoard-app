import React from 'react';

const Users: React.FC = () => {
  return (
    <div>
      <h1>Usuarios</h1>
      <iframe
        src="http://localhost:3002"
        title="Users"
        style={{ width: '100%', height: '80vh', border: 'none' }}
      />
    </div>
  );
};

export default Users;
