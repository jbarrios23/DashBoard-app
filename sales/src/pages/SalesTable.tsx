import React from 'react';

interface Sale {
  id: number;
  date: string;
  amount: string;
  customer: string;
}

const salesData: Sale[] = [
  { id: 1, date: '2024-10-01', amount: '$1000', customer: 'Cliente A' },
  { id: 2, date: '2024-10-05', amount: '$750', customer: 'Cliente B' },
];

const SalesTable: React.FC = () => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>ID Venta</th>
          <th>Fecha</th>
          <th>Monto</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((sale) => (
          <tr key={sale.id}>
            <td>{sale.id}</td>
            <td>{sale.date}</td>
            <td>{sale.amount}</td>
            <td>{sale.customer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;