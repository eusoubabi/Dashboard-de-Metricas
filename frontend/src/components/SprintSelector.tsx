// src/components/SprintSelector.tsx
import React from "react";

interface Props {
  selected: string;
  onChange: (value: string) => void;
  options: string[];
}

const SprintSelector: React.FC<Props> = ({ selected, onChange, options }) => {
  return (
    <div className="bg-zinc-800 px-4 py-2 rounded flex items-center space-x-2 w-full sm:w-auto">
      <label htmlFor="sprint" className="text-sm text-zinc-400">
        Sprint:
      </label>
      <select
        id="sprint"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="bg-zinc-900 text-white rounded px-3 py-1 w-full sm:w-auto"
      >
        {options.map((sprint) => (
          <option key={sprint} value={sprint}>
            {sprint}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SprintSelector;
