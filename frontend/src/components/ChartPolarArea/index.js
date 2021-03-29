import React from 'react';
import { Polar } from "react-chartjs-2";

const options = {
  legend: {
    display: false
  }
}

const ChartPolarArea = (props) => (
  <>
    <Polar data={props.data} options={options} />
  </>
);

export default ChartPolarArea;
