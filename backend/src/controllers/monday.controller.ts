import { Request, Response } from "express";
import { getDashboardData } from "../services/dashboard.service";
import { getBoardData } from "../services/monday.service";

// ✅ Endpoint: Dashboard (com filtros por Sprint, Status, Prioridade)
export const fetchDashboard = async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const { sprint, status, priority } = req.query;

  try {
    const data = await getDashboardData(boardId, {
      sprint: sprint ? String(sprint) : undefined,
      status: status ? String(status) : undefined,
      priority: priority ? String(priority) : undefined
    });

    return res.json(data);
  } catch (error) {
    console.error("Erro no fetchDashboard:", error);
    return res.status(500).json({ message: "Erro ao buscar dados do dashboard" });
  }
};

// ✅ Endpoint: Colunas e valores únicos (para descobrir sprints disponíveis)
export const fetchColumnsAndValues = async (req: Request, res: Response) => {
  const { boardId } = req.params;

  try {
    const { columns, items } = await getBoardData(boardId);

    const result: Record<string, { title: string; values: string[] }> = {};

    // Inicializa colunas
    columns.forEach(col => {
      result[col.id] = { title: col.title, values: [] };
    });

    // Popula valores únicos
    items.forEach(item => {
      item.column_values.forEach(c => {
        if (result[c.id] && c.text) {
          if (!result[c.id].values.includes(c.text)) {
            result[c.id].values.push(c.text);
          }
        }
      });
    });

    return res.json(result);
  } catch (error) {
    console.error("Erro no fetchColumnsAndValues:", error);
    return res.status(500).json({ message: "Erro ao buscar colunas e valores" });
  }
};
