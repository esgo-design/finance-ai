import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}
const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex justify-between items-center">
      {/* Icone */}
      <div className="flex items-center gap-3">
        <div className="bg-white/5 rounded-lg p-2">{icon}</div>
        <p className="text-sm text-muted-foreground"> {title}</p>
      </div>
      <p className="font-bold text-sm">{value}%</p>
    </div>
  );
};

export default PercentageItem;
