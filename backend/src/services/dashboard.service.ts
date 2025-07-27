import { getBoardData } from "./monday.service";

interface DashboardFilters {
  sprint?: string;
  status?: string;
  priority?: string;
}

export const getDashboardData = async (boardId: string, filters: DashboardFilters) => {
  const { columns, items } = await getBoardData(boardId);

  // Mapa para título amigável -> id
  const columnMap: Record<string, string> = {};
  columns.forEach(col => {
    columnMap[col.title.toLowerCase()] = col.id; // exemplo: "sprint" -> "sprint_1"
  });

  const filteredItems = items.filter(item => {
    let include = true;

    if (filters.sprint) {
      const sprintColumnId = columnMap["sprint"];
      const sprintValue = item.column_values.find(c => c.id === sprintColumnId)?.text;
      include = include && sprintValue === filters.sprint;
    }

    if (filters.status) {
      const statusColumnId = columnMap["status"];
      const statusValue = item.column_values.find(c => c.id === statusColumnId)?.text;
      include = include && statusValue === filters.status;
    }

    if (filters.priority) {
      const priorityColumnId = columnMap["prioridade"];
      const priorityValue = item.column_values.find(c => c.id === priorityColumnId)?.text;
      include = include && priorityValue === filters.priority;
    }

    return include;
  });

  // ✅ KPIs
  const totalItens = filteredItems.length;
  const concluidos = filteredItems.filter(i => {
    const statusColumnId = columnMap["status"];
    return i.column_values.find(c => c.id === statusColumnId)?.text === "Done";
  }).length;

  const kpis = [
    { label: "Total de Itens", value: totalItens },
    { label: "Concluídos", value: concluidos }
  ];

  // ✅ Severidade por prioridade
  const severidadeMap: Record<string, number> = {};
  filteredItems.forEach(item => {
    const priorityColumnId = columnMap["prioridade"];
    const prioridade = item.column_values.find(c => c.id === priorityColumnId)?.text || "Indefinido";
    severidadeMap[prioridade] = (severidadeMap[prioridade] || 0) + 1;
  });

  const severidade = {
    labels: Object.keys(severidadeMap),
    values: Object.values(severidadeMap),
    colors: ["#f00", "#ff0", "#0f0", "#00f"]
  };

  return {
    kpis,
    severidade,
    statusDistribuicao: {
      labels: ["Done", "Em andamento", "A fazer"],
      values: [concluidos, totalItens - concluidos, 0],
      colors: ["#1abc9c", "#3498db", "#e74c3c"]
    }
  };
};
