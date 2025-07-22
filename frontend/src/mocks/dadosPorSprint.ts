import type {
  BarChartData,
  KPI,
  LineChartData,
  PieChartData,
} from "../types";

export const dadosPorSprint: Record<
  string,
  {
    kpis: KPI[];
    burndown: LineChartData;
    severidade: PieChartData;
    areasAfetadas: BarChartData;
    tempoResolucao: BarChartData;
    tipoTestes: PieChartData;
    cobertura: LineChartData;
    bugsPosRelease: BarChartData;
  }
> = {
  "Sprint 24": {
    kpis: [
      { label: "Total de Bugs", value: 10 },
      { label: "Bugs Reabertos", value: 2 },
      { label: "Tempo Médio de Resolução", value: "2.3 dias" },
      { label: "Testes Executados", value: 120 },
      { label: "Taxa de Sucesso", value: "89%" },
      { label: "Bug Leakage", value: 1 },
    ],
    burndown: {
      labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4"],
      datasets: [
        {
          label: "Bugs Abertos",
          data: [10, 9, 6, 3],
          fill: false,
          borderColor: "#f87171",
          tension: 0.1,
        },
        {
          label: "Bugs Fechados",
          data: [0, 2, 4, 7],
          fill: false,
          borderColor: "#34d399",
          tension: 0.1,
        },
      ],
    },
    severidade: {
      labels: ["Críticos", "Altos", "Médios", "Baixos"],
      values: [1, 2, 5, 2],
      colors: ["#ef4444", "#f97316", "#facc15", "#22c55e"],
    },
    areasAfetadas: {
      labels: ["Web", "TV", "Mobile", "Suporte"],
      values: [3, 2, 4, 1],
    },
    tempoResolucao: {
      labels: ["Sprint 24"],
      values: [2.3],
    },
    tipoTestes: {
      labels: ["Manual", "Automatizado", "Regressivo", "Exploratória"],
      values: [60, 30, 20, 10],
      colors: ["#0ea5e9", "#22c55e", "#facc15", "#a78bfa"],
    },
    cobertura: {
      labels: ["Sprint 22", "Sprint 23", "Sprint 24"],
      datasets: [
        {
          label: "Cobertura (%)",
          data: [30, 45, 55],
          fill: false,
          borderColor: "#38bdf8",
          tension: 0.3,
        },
      ],
    },
    bugsPosRelease: {
      labels: ["Sprint 24"],
      values: [2],
    },
  },

  "Sprint 25": {
    kpis: [
      { label: "Total de Bugs", value: 14 },
      { label: "Bugs Reabertos", value: 4 },
      { label: "Tempo Médio de Resolução", value: "1.9 dias" },
      { label: "Testes Executados", value: 130 },
      { label: "Taxa de Sucesso", value: "90%" },
      { label: "Bug Leakage", value: 3 },
    ],
    burndown: {
      labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4"],
      datasets: [
        {
          label: "Bugs Abertos",
          data: [14, 12, 9, 5],
          fill: false,
          borderColor: "#f87171",
          tension: 0.1,
        },
        {
          label: "Bugs Fechados",
          data: [0, 3, 6, 9],
          fill: false,
          borderColor: "#34d399",
          tension: 0.1,
        },
      ],
    },
    severidade: {
      labels: ["Críticos", "Altos", "Médios", "Baixos"],
      values: [2, 5, 6, 1],
      colors: ["#ef4444", "#f97316", "#facc15", "#22c55e"],
    },
    areasAfetadas: {
      labels: ["Web", "TV", "Mobile", "Suporte"],
      values: [4, 3, 5, 2],
    },
    tempoResolucao: {
      labels: ["Sprint 25"],
      values: [1.9],
    },
    tipoTestes: {
      labels: ["Manual", "Automatizado", "Regressivo", "Exploratória"],
      values: [50, 45, 15, 5],
      colors: ["#0ea5e9", "#22c55e", "#facc15", "#a78bfa"],
    },
    cobertura: {
      labels: ["Sprint 23", "Sprint 24", "Sprint 25"],
      datasets: [
        {
          label: "Cobertura (%)",
          data: [45, 55, 65],
          fill: false,
          borderColor: "#38bdf8",
          tension: 0.3,
        },
      ],
    },
    bugsPosRelease: {
      labels: ["Sprint 25"],
      values: [0],
    },
  },

  "Sprint 26": {
    kpis: [
      { label: "Total de Bugs", value: 12 },
      { label: "Bugs Reabertos", value: 3 },
      { label: "Tempo Médio de Resolução", value: "1.8 dias" },
      { label: "Testes Executados", value: 140 },
      { label: "Taxa de Sucesso", value: "92%" },
      { label: "Bug Leakage", value: 2 },
    ],
    burndown: {
      labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6"],
      datasets: [
        {
          label: "Bugs Abertos",
          data: [10, 12, 9, 6, 4, 2],
          fill: false,
          borderColor: "#f87171",
          tension: 0.1,
        },
        {
          label: "Bugs Fechados",
          data: [0, 2, 3, 6, 8, 10],
          fill: false,
          borderColor: "#34d399",
          tension: 0.1,
        },
      ],
    },
    severidade: {
      labels: ["Críticos", "Altos", "Médios", "Baixos"],
      values: [2, 3, 4, 1],
      colors: ["#ef4444", "#f97316", "#facc15", "#22c55e"],
    },
    areasAfetadas: {
      labels: ["Web", "TV", "Mobile", "Suporte"],
      values: [6, 3, 8, 2],
    },
    tempoResolucao: {
      labels: ["Sprint 26"],
      values: [1.8],
    },
    tipoTestes: {
      labels: ["Manual", "Automatizado", "Regressivo", "Exploratória"],
      values: [80, 40, 15, 5],
      colors: ["#0ea5e9", "#22c55e", "#facc15", "#a78bfa"],
    },
    cobertura: {
      labels: ["Sprint 23", "Sprint 24", "Sprint 25", "Sprint 26"],
      datasets: [
        {
          label: "Cobertura (%)",
          data: [40, 55, 65, 72],
          fill: false,
          borderColor: "#38bdf8",
          tension: 0.3,
        },
      ],
    },
    bugsPosRelease: {
      labels: ["Sprint 26"],
      values: [3],
    },
  },
};
