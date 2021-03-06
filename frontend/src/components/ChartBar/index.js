import React from 'react';
import { Bar } from "react-chartjs-2";

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const ChartBar = (props) => (
  <>
    <Bar data={props.data} options={options} />
  </>
);

export default ChartBar;
