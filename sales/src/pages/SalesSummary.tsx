import React from 'react';

interface SalesSummaryProps {
  totalSales: number;
  averageRevenue: number;
  monthlyGrowth: number;
}

const SalesSummary: React.FC<SalesSummaryProps> = ({ totalSales, averageRevenue, monthlyGrowth }) => {
  return (
    <div className="sales-summary">
      <div className="metric">Ventas Totales: ${totalSales}</div>
      <div className="metric">Ingresos Promedio: ${averageRevenue}</div>
      <div className="metric">Crecimiento Mensual: {monthlyGrowth}%</div>
    </div>
  );
};

export default SalesSummary;
