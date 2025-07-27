import { dadosPorSprint } from "../mocks/dadosPorSprint";

export function useDadosPorSprint(sprint: string) {
  return dadosPorSprint[sprint] || dadosPorSprint["Sprint 26"];
}
