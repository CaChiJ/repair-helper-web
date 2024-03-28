import { MechanicRepository } from "@/app/lib/repository/mechanic-repository";
import MechanicRepositoryImpl from "@/app/lib/repository/mechanic-repository-impl";
import Headline from "@/app/ui/headline/headline";
import MechanicList from "@/app/ui/mechanic-list/mechanic-list";
import SkeletonList from "@/app/ui/mechanic-list/skeleton-list";
import { headers } from "next/headers";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mechanicRepository: MechanicRepository = new MechanicRepositoryImpl();

  return (
    <div>
      <div className="w-full h-1 bg-[#D9D9D9]">
        <div className="w-[45vw] h-1 bg-highlight" />
      </div>

      <div className="ml-6 mt-6 mb-7">
        <Headline
          title="Step 2. 업체 선택"
          description="수리를 맡길 업체를 선택해주세요!"
        />
      </div>

      <Suspense fallback={<SkeletonList amount={5} />}>
        <MechanicList
          mechanicRepository={mechanicRepository}
          href={{
            pathname: "/reservation/step3",
            query: {
              ...searchParams,
            }
          }}
        />
      </Suspense>
    </div>
  );
}
