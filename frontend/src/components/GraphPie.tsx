import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieProps {
  title: string;
  data: {
    labels: string[];
    values: number[];
    colors: string[];
  };
}

const GraphPie: React.FC<PieProps> = ({ title, data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
      },
    ],
  };

  return (
    <div className="bg-zinc-800 p-6 rounded shadow w-full overflow-x-auto">
      <h2 className="mb-4 font-semibold text-lg">{title}</h2>
      <div className="w-full max-w-md mx-auto">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default GraphPie;
