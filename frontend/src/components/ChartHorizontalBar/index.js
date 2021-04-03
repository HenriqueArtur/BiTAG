import React from 'react';
import { HorizontalBar } from "react-chartjs-2";

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          padding: 5,
        },
      },
    ],
  },
}

const ChartHorizontalBar = (props) => (
  <>
    <HorizontalBar data={props.data} options={options} />
  </>
);

export default ChartHorizontalBar;
