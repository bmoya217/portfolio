type Props = {
  value: string;
  label: string;
};

export const Stat = ({ value, label }: Props) => {
  return (
    <div className="flex-1">
      <p className="card-stat">{value}</p>
      <p>{label}</p>
    </div>
  );
};