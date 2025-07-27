import { useSprint } from "../hooks/useSprints";
import { dadosPorSprint } from "../mocks/dadosPorSprint";
import SprintSelector from "../components/SprintSelector";
import GraphBarVertical from "../components/GraphBarVertical";
import GraphBarHorizontal from "../components/GraphBarHorizontal";
import GraphPie from "../components/GraphPie";
import KPIBlock from "../components/KPIBlock";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  Title as ChartTitle,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

import Title from "../components/design/Title";
import Card from "../components/design/Card";
import Button from "../components/design/Button";
import Section from "../components/design/Section";
import { defaultLineOptions } from "../components/design/graphOptions";
import { formatBarData } from "../formatters/formatBarData";

Chart.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartTitle,
  Tooltip,
  Legend
);

const DashboardQA = () => {
  const { sprintSelecionada, setSprintSelecionada, sprintsDisponiveis } = useSprint();

  const {
    kpis,
    burndown,
    severidade,
    areasAfetadas,
    tempoResolucao,
    tipoTestes,
    cobertura,
    bugsPosRelease,
  } = dadosPorSprint[sprintSelecionada];

  return (
    <div className="bg-zinc-900 min-h-screen text-white p-4 sm:p-6 space-y-8 overflow-x-hidden">
      {/* Header responsivo */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center w-full">
        {/* Título */}
        <h1 className="text-2xl font-semibold text-center sm:text-left w-full sm:w-auto">
          Painel de Métricas de QA
        </h1>

        {/* Área do seletor + botão */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-auto">
            <SprintSelector
              selected={sprintSelecionada}
              onChange={setSprintSelecionada}
              options={sprintsDisponiveis}
            />
          </div>
          <Button label="Exportar" className="w-full sm:w-auto" />
        </div>
      </div>

      {/* KPIs responsivos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {kpis.map((kpi, idx: number) => (
          <KPIBlock key={idx} label={kpi.label} value={kpi.value} />
        ))}
      </div>

      {/* Burndown */}
      <Card>
        <Title>Burndown de Bugs</Title>
        <div className="h-[9rem] sm:h-[12rem] w-full">
          <Line data={burndown} options={defaultLineOptions} />
        </div>
      </Card>

      {/* Gráficos ajustados com md:-top para alinhar no desktop */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <GraphPie
          title="Distribuição por Severidade"
          data={severidade}
          className="relative md:-top-0"
        />
        <GraphBarHorizontal
          title="Áreas Mais Afetadas"
          data={formatBarData("Áreas Afetadas", areasAfetadas)}
          className="relative md:-top-3"
        />
        <GraphBarVertical
          title="Tempo Médio de Resolução por Sprint"
          data={formatBarData("Tempo de Resolução", tempoResolucao)}
          className="relative md:-top-2"
        />
        <GraphPie
          title="Tipo de Testes Executados"
          data={tipoTestes}
          className="relative md:-top-2"
        />
      </Section>

      {/* Cobertura e Bugs Pós-Release */}
      <Section className="flex flex-col gap-y-4 px-4 py-4">
        <Card>
          <Title>Cobertura de Testes Automatizados</Title>
          <div className="h-[9rem] sm:h-[12rem] w-full">
            <Line data={cobertura} options={defaultLineOptions} />
          </div>
        </Card>

        <GraphBarVertical
          title="Bugs Pós-Release (até 7 dias após deploy)"
          data={formatBarData("Bugs Pós-Release", bugsPosRelease)}
        />
      </Section>
    </div>
  );
};

export default DashboardQA;
