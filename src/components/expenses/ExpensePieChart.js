import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpensePieChart = ({ expenses }) => {
  const expenseData = {
    labels: expenses.map((expense) => expense.title),
    datasets: [
      {
        label: 'Expenses by Category',
        data: expenses.map((expense) => expense.category),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpensePieChart;
