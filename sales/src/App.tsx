import React from 'react';
import './App.css';
import SalesSummary from './pages/SalesSummary';

function App() {
  const totalSales = 25000;
  const averageRevenue = 1500;
  const monthlyGrowth = 12;


  return (
    <div className="sales-page">
      <h1>Panel de Ventas</h1>
      <SalesSummary
        totalSales={totalSales}
        averageRevenue={averageRevenue}
        monthlyGrowth={monthlyGrowth}
      />  {/* Resumen rápido de métricas de ventas */}
      {/* <SalesChart />    Gráficos para ver tendencias
    <SalesTable />    Tabla con detalles de cada venta */}
    </div>
  );
}

export default App;
