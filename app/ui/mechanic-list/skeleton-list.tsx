export default async function SkeletonList({ amount = 3 }: { amount: number }) {
  const skeletons = [];

  for (let i = 0; i < amount; ++i) {
    skeletons.push(
      <div className="mx-5 h-[4.1rem] shadow rounded-lg py-[6px] px-[10px] bg-[#D9D9D9]"> </div>
    );
  }

  return <div className="flex flex-col gap-3">{skeletons}</div>;
}
