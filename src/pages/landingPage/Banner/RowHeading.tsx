interface TextProps {
  text: string;
}

const RowHeading: React.FC<TextProps> = ({ text, ...props }) => {
  const split = text.split(" ");
  const firstWord = split[0];
  const remainingWords = split.slice(1).join(" ");

  return (
    <div {...props}>
      {firstWord}
      <span> {remainingWords}</span>
    </div>
  );
};

export default RowHeading;
