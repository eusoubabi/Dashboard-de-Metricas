import { useState } from "react";
import { dadosPorSprint } from "../mocks/dadosPorSprint";

export function useSprint() {
  const sprintsDisponiveis = Object.keys(dadosPorSprint);
  const [sprintSelecionada, setSprintSelecionada] = useState(sprintsDisponiveis[0]);

  return {
    sprintSelecionada,
    setSprintSelecionada,
    sprintsDisponiveis,
  };
}
