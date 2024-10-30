import React from 'react';

const Sales: React.FC = () => {
  return (
    <div>
      <h1>Ventas</h1>
      <iframe
        src="http://localhost:3001"
        title="Sales"
        style={{ width: '100%', height: '80vh', border: 'none' }}
      />
    </div>
  );
};

export default Sales;
