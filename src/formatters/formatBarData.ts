// src/formatters/formatBarData.ts

export interface SimpleBarData {
  labels: string[];
  values: number[];
}

export const formatBarData = (
  titulo: string,
  info: SimpleBarData,
  coresPersonalizadas?: string[]
) => {
  const backgroundColor =
    coresPersonalizadas && coresPersonalizadas.length >= info.values.length
      ? coresPersonalizadas
      : gerarCoresPadrao(info.values.length);

  return {
    labels: info.labels,
    datasets: [
      {
        label: titulo,
        data: info.values,
        backgroundColor,
      },
    ],
  };
};

const gerarCoresPadrao = (quantidade: number) => {
  const paleta = [
    "#1e40af", "#16a34a", "#facc15", "#f97316",
    "#a78bfa", "#22d3ee", "#fb7185", "#4ade80"
  ];

  return Array.from({ length: quantidade }, (_, i) => paleta[i % paleta.length]);
};
