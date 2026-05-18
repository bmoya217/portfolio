type Props = {
  tags: string[];
};

export const Tags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};
