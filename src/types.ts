export interface KPI {
  label: string;
  value: string | number;
}

export interface PieChartData {
  labels: string[];
  values: number[];
  colors: string[];
}

export interface BarChartData {
  labels: string[];
  values: number[];
}

export interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

export interface DadosPorSprint {
  kpis: KPI[];
  burndown: LineChartData;
  severidade: PieChartData;
  areasAfetadas: BarChartData;
  tempoResolucao: BarChartData;
  tipoTestes: PieChartData;
  cobertura: LineChartData;
  bugsPosRelease: BarChartData;
}
