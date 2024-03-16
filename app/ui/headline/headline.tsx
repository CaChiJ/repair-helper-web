export default function Headline({
    title, description
}: {
    title: string,
    description: string
}) {
    return (
        <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <h2 className="text-medium text-xs text-weak">{description}</h2>
        </div>
    );
}