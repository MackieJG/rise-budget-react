import React from 'react';
import { Bar } from 'react-chartjs-2';

const FilteredExpenseBarChart = ({ barChartExpense }) => {
  const data = {
    labels: barChartExpense.map(expense => expense.date),
    datasets: [
      {
        label: `Expense Amount`,
        data: barChartExpense.map(expense => expense.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
};

export default FilteredExpenseBarChart;