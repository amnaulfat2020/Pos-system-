import React from 'react';
import { Bar } from 'react-chartjs-2';

const RevenueChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Revenue',
        data: [300, 200, 400, 500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default RevenueChart;
