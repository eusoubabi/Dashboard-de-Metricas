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
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

// Registro necessário para o Chart.js funcionar corretamente
Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Painel de Métricas de QA</h1>
        <div className="flex space-x-4">
          <SprintSelector
            selected={sprintSelecionada}
            onChange={setSprintSelecionada}
            options={sprintsDisponiveis}
          />
          <button className="bg-blue-600 px-4 py-2 rounded">Exportar</button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {kpis.map((kpi, idx: number) => (
          <KPIBlock key={idx} label={kpi.label} value={kpi.value} />
        ))}
      </div>

      {/* Burndown separado com altura fixa */}
      <div className="bg-zinc-800 p-6 rounded shadow">
        <h2 className="mb-4 font-semibold text-lg">Burndown de Bugs</h2>
        <div className="h-64 w-full">
          <Line data={burndown}  
                options= {{ 
                    responsive: true, 
                    maintainAspectRatio: false
                    }}
                    style={{ height: "100%" }} />
        </div>
      </div>

      {/* Gráficos agrupados dinamicamente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GraphPie title="Distribuição por Severidade" data={severidade} />
        <GraphBarHorizontal title="Áreas Mais Afetadas" data={areasAfetadas} />
        <GraphBarVertical title="Tempo Médio de Resolução por Sprint" data={tempoResolucao} />
        <GraphPie title="Tipo de Testes Executados" data={tipoTestes} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-zinc-800 p-6 rounded shadow">
          <h2 className="mb-4 font-semibold text-lg">Cobertura de Testes Automatizados</h2>
          <Line data={cobertura} />
        </div>

        <GraphBarVertical
          title="Bugs Pós-Release (até 7 dias após deploy)"
          data={bugsPosRelease}
        />
      </div>
    </div>
  );
};

export default DashboardQA;
