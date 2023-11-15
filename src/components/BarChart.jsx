import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import faker from "faker";
import React, { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const chartRef = useRef();
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const onClick = (event) => {
    const eventRegister = getElementAtEvent(chartRef.current, event)
    let datasetIndex = eventRegister[0].datasetIndex
    let index = eventRegister[0].index
    alert(`You clicked on the dataset index ${data.datasets[datasetIndex].label} and got the value corresponding to ${labels[index]}`)
  };

  return <Bar ref={chartRef} options={options} data={data} onClick={onClick} />;
};

export default BarChart;
