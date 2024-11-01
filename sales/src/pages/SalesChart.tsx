import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface SalesData {
  month: string;
  sales: number;
}

const data: SalesData[] = [
  { month: 'Enero', sales: 4000 },
  { month: 'Febrero', sales: 3000 },
  { month: 'Marzo', sales: 5000 },
];

const SalesChart: React.FC = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
    </LineChart>
  );
};

export default SalesChart;
