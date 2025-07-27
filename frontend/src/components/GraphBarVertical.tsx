import { Bar } from "react-chartjs-2";
import Card from "./design/Card";
import Title from "./design/Title";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend);

interface Props {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string | string[];
    }[];
  };
  className?: string; // Agora aceita className
}

const GraphBarVertical = ({ title, data, className }: Props) => {
  const isDataValid =
    Array.isArray(data.labels) &&
    Array.isArray(data.datasets) &&
    data.datasets.length > 0 &&
    data.datasets.every((ds) => Array.isArray(ds.data));

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } },
    },
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
  };

  return (
    <Card className={`h-[28rem] flex flex-col justify-between px-4 py-6 gap-y-4 overflow-hidden ${className ?? ""}`}>
      <Title>{title}</Title>
      <div className="flex-1 flex items-center justify-center">
        {isDataValid ? (
          <div className="w-full h-[18rem] sm:h-[22rem]">
            <Bar data={data} options={options} />
          </div>
        ) : (
          <div className="text-white">Dados insuficientes para exibir o gráfico.</div>
        )}
      </div>
    </Card>
  );
};

export default GraphBarVertical;
