import { Pie } from "react-chartjs-2";
import Card from "./design/Card";
import Title from "./design/Title";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  title: string;
  data: {
    labels: string[];
    values: number[];
    colors: string[];
  };
}

const GraphPie = ({ title, data }: Props) => {
  const isDataValid =
    Array.isArray(data.labels) &&
    Array.isArray(data.values) &&
    Array.isArray(data.colors) &&
    data.labels.length > 0 &&
    data.values.length > 0 &&
    data.colors.length > 0;

  const chartData = {
    labels: data.labels,
    datasets: [{ data: data.values, backgroundColor: data.colors }],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#fff",
          boxWidth: 12,
          font: { size: 12 },
          padding: 12,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Card className="h-[30rem] flex flex-col justify-between px-4 py-6 gap-y-4 overflow-hidden">
      <Title>{title}</Title>
      <div className="flex-1 flex items-center justify-center">
        {isDataValid ? (
          <div className="w-full h-[16rem]">
            <Pie data={chartData} options={options} />
          </div>
        ) : (
          <div className="text-white">Dados insuficientes para exibir o gráfico.</div>
        )}
      </div>
    </Card>
  );
};

export default GraphPie;
