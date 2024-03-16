export default function QuestionSentences({
    text,
    description
}: {
    text: string,
    description: string
}) {
  return (
    <div>
      <h2 className="font-medium text-base">{text}</h2>
      <p className="font-medium text-xs text-weak">{description}</p>
    </div>
  );
}
