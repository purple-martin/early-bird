import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { setLegendSpacingPlugin, setLegendStyle } from './config'

import { Bar } from "react-chartjs-2";
import { Card } from "@nextui-org/react";
import React from "react";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];

const defineDataSetConfig = {
  borderWidth: 2,
  borderRadius: 5,
  borderSkipped: false,
}

export const data = {
  labels,
  datasets: [
    {
      label: "2022",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#0072F5",
      backgroundColor: "#0072F5",
      ...defineDataSetConfig,
    },
    {
      label: "2021",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#7828C8",
      backgroundColor: "#7828C8",
      ...defineDataSetConfig,
    },
  ],
};

export const VerticalBarCharts = () => {
  return (
    <Card>
        <Bar 
          plugins={setLegendSpacingPlugin}
          options={{
            responsive: true,
            scales: {
              x: {
                border: {
                  display: false
                },
                grid: {
                  display: false
                }
              }, 
              y: {
                display: false,
                border: {
                  display: false
                },
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: setLegendStyle
            },
          }}
          data={data}
        />
    </Card>
  );
};
