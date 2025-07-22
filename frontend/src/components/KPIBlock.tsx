// src/components/KPIBlock.tsx
import React from "react";

interface Props {
  label: string;
  value: string | number;
}

const KPIBlock: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded shadow w-full min-w-[120px] text-center">
      <div className="text-sm text-zinc-400 truncate">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
};

export default KPIBlock;
