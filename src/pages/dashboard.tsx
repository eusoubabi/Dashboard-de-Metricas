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

// Componentes visuais
import Title from "../components/design/Title";
import Card from "../components/design/Card";
import Button from "../components/design/Button";
import Section from "../components/design/Section";
import { defaultLineOptions } from "../components/design/graphOptions";

// Utilitário adicionado
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
    <div className="bg-zinc-900 min-h-screen text-white p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Painel de Métricas de QA</h1>
        <div className="flex space-x-4">
          <SprintSelector
            selected={sprintSelecionada}
            onChange={setSprintSelecionada}
            options={sprintsDisponiveis}
          />
          <Button label="Exportar" />
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-6 gap-4">
        {kpis.map((kpi, idx: number) => (
          <KPIBlock key={idx} label={kpi.label} value={kpi.value} />
        ))}
      </div>

      {/* Burndown */}
      <Card>
        <Title>Burndown de Bugs</Title>
        <div className="h-80 w-full">
          <Line data={burndown} options={defaultLineOptions} style={{ height: "100%" }} />
        </div>
      </Card>

      {/* Gráficos de distribuição e severidade */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <GraphPie title="Distribuição por Severidade" data={severidade} />
       <div className="relative -top-3">
      <GraphBarHorizontal
          title="Áreas Mais Afetadas"
          data={formatBarData("Áreas Afetadas", areasAfetadas)}
        />
       </div> 
        <GraphBarVertical
          title="Tempo Médio de Resolução por Sprint"
          data={formatBarData("Tempo de Resolução", tempoResolucao)}
        />
        <GraphPie title="Tipo de Testes Executados" data={tipoTestes} />
      </Section>

      {/* Cobertura e bugs pós-release */}
      <Section className="flex flex-col gap-y-4 px-4 py-4">
        <Card>
          <Title>Cobertura de Testes Automatizados</Title>
          <div className="h-70 w-full">
            <Line data={cobertura} options={defaultLineOptions} style={{ height: "100%" }} />
          </div>
        </Card>

        <GraphBarVertical
            title="Bugs Pós-Release (até 7 dias após deploy)"
            data={formatBarData("Bugs Pós-Release", bugsPosRelease)}
            className="relative top-5"
          />
      </Section>
    </div>
  );
};

export default DashboardQA;
