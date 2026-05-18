type Props = {
  items: string[];
};

export const Highlights = ({ items }: Props) => {
  return (
    <ul className="list-disc pl-5 space-y-3 mt-3">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
