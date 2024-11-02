// src/modules/users/UsersModule.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

const UsersModule: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path=":userId" element={<UserDetail />} />
      <Route path="edit/:userId" element={<UserEdit />} />
    </Routes>
  );
}

export default UsersModule;
