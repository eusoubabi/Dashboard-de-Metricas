import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

interface BarProps {
  title: string;
  data: {
    labels: string[];
    values: number[];
  };
}

const GraphBarHorizontal: React.FC<BarProps> = ({ title, data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Quantidade",
        data: data.values,
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="bg-zinc-800 p-6 rounded shadow w-full overflow-x-auto">
      <h2 className="mb-4 font-semibold text-lg">{title}</h2>
      <div className="h-64 w-full max-w-3xl mx-auto">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default GraphBarHorizontal;
