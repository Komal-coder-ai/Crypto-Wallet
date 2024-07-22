import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Optional: Import if using date-fns for date handling
import { CategoryScale } from 'chart.js';

// Register the category scale globally
ChartJS.register(CategoryScale);
const SimpleLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Ensure type is 'category' for categorical data
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div>
      <h2>Simple Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SimpleLineChart;
