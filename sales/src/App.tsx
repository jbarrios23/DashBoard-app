import React from 'react';
import './App.css';
import SalesSummary from './pages/SalesSummary';
import SalesChart from './pages/SalesChart';
import SalesTable from './pages/SalesTable';

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
      />
      <SalesChart />
      <SalesTable />
    </div>
  );
}

export default App;
