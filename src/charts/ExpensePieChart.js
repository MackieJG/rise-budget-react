import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const ExpensePieChart = ({ expenses }) => {
  const expenseByCategory = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (acc[category]) {
      acc[category] += expense.amount;
    } else {
      acc[category] = expense.amount;
    }
    return acc;
  }, {});

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const expenseData = {
    labels: Object.keys(expenseByCategory),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(expenseByCategory).map((amount) => (amount / totalExpenses) * 100),
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

  return <Pie data={expenseData} />;
};

export default ExpensePieChart;