import React from 'react';
import { Bar } from 'react-chartjs-2';

const FilteredExpenseBarChart = ({ barChartExpense }) => {
  const data = {
    labels: barChartExpense.map(expense => expense.title),
    datasets: [
      {
        label: `Expense Amount`,
        data: barChartExpense.map(expense => expense.amount),
        backgroundColor: '#5a975a7c',
        borderColor: '#80b180',

        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
          },
        },
      ],
    },
  };
  
  return <Bar data={data} options={options} />;
};

export default FilteredExpenseBarChart;
