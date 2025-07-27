import axios from "axios";

export interface Column {
  id: string;
  title: string;
}

export interface ColumnValue {
  id: string;
  text: string;
}

export interface MondayItem {
  id: string;
  name: string;
  column_values: ColumnValue[];
}

interface MondayResponse {
  data: {
    boards: {
      name: string;
      columns: Column[];
      items_page: {
        items: MondayItem[];
      };
    }[];
  };
}

const getHeaders = () => ({
  Authorization: process.env.MONDAY_API_KEY || "",
  "Content-Type": "application/json"
});

export const getBoardData = async (boardId: string) => {
  const apiUrl = process.env.MONDAY_API_URL || "https://api.monday.com/v2";
  const headers = getHeaders();

  const query = `
    query {
      boards(ids: ${boardId}) {
        name
        columns {
          id
          title
        }
        items_page(limit: 100) {
          items {
            id
            name
            column_values {
              id
              text
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post<MondayResponse>(apiUrl, { query }, { headers });
    const board = response.data.data.boards[0];

    return {
      columns: board.columns,
      items: board.items_page.items
    };
  } catch (error) {
    console.error("Erro ao buscar dados do board:", error);
    return { columns: [], items: [] };
  }
};
