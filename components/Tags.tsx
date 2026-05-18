type Props = {
  items: string[];
};

export const Tags = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {items.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};
