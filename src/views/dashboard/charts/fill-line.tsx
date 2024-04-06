import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Box } from "@/components";
import { Card } from "@nextui-org/react";
import { Line } from "react-chartjs-2";
import React from "react";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#33A6FF",
      backgroundColor: "#33A6FF",
      pointStyle: false,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#1FCCAD",
      backgroundColor: "#1FCCAD",
      pointStyle: false,
    },
  ],
};

export const FillLineCharts = () => {

  return (
    <Card>
    </Card>
  );
};
