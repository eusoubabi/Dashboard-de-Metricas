import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Card from "./design/Card";
import TitleText from "./design/Title";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
  className?: string; // Mantido para uniformidade
}

const GraphBarHorizontal = ({ title, data, className }: Props) => {
  const isDataValid =
    data &&
    Array.isArray(data.labels) &&
    Array.isArray(data.datasets) &&
    data.datasets.length > 0 &&
    data.datasets.every((ds) => Array.isArray(ds.data));

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y" as const,
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
      <TitleText>{title}</TitleText>
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

export default GraphBarHorizontal;
