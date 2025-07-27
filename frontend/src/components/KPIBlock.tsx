import Card from "./design/Card";

interface Props {
  label: string;
  value: string | number;
}

const KPIBlock = ({ label, value }: Props) => {
  return (
    <Card className="p-4 text-center min-w-[120px] h-full flex flex-col justify-center">
      <div className="text-sm text-zinc-400 truncate">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </Card>
  );
};

export default KPIBlock;
