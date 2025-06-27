import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, Title);

const MonthlyChart = () => {
  const { transactions } = useContext(TransactionContext);

  const monthlyData = Array(12).fill(0);
  transactions.forEach(tx => {
    if (tx.date) {
      const month = new Date(tx.date).getMonth();
      monthlyData[month] += tx.amount;
    }
  });

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Monthly Summary',
        backgroundColor: '#5c6bc0',
        data: monthlyData
      }
    ]
  };

  return (
    <div>
      <h5 className="text-center mt-3">Monthly Overview</h5>
      <Bar data={data} />
    </div>
  );
};

export default MonthlyChart;
