export default function StaticProgressBar({
    amount,
    width,
    color,
    backgroundColor
}: {
    amount: number
    width: number
    color: string,
    backgroundColor: string,
}) {
    return (
    <div className={`w-[${width}] h-[${50}px] bg-[${backgroundColor}]`}>
        dsfs
        <div className={`w-[${amount}] bg-slate-50`}>dfdd
            </div>
    </div>);
}