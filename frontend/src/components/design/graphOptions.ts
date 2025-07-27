import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
} from "chart.js";

import type { ChartOptions } from "chart.js";

// Registro de uma única vez
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title
);

// Linha (burndown, cobertura)
export const defaultLineOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: { color: "#fff" },
    },
    y: {
      ticks: { color: "#fff" },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        font: {
          size: 12,
          weight: "bold", // 👈 aplica o "engrossamento"
        },
      },
    },
  },
};

// Barras (vertical/horizontal)
export const defaultBarOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: { color: "#fff" },
    },
    y: {
      ticks: { color: "#fff" },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        font: {
          size: 12,
          weight: "bold", // (opcional) aplicar também nas barras
        },
      },
    },
  },
};

// Pizza (se necessário)
export const defaultPieOptions: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        font: {
          size: 12,
          weight: "bold", // (opcional) aplicar também nas pizzas
        },
      },
    },
  },
};
