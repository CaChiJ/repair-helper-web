import { verifyOrNull } from "@/app/lib/auth/jwt";
import { RepairRepository } from "@/app/lib/repository/repair-repository";
import RepairRepositoryImpl from "@/app/lib/repository/repair-repository-impl";

export default async function Page({ params }: { params: { token: string } }) {
  const repairRepository: RepairRepository = new RepairRepositoryImpl();

  const payload: any = verifyOrNull(params.token);
  let repairRequest = null;

  if (payload === null || !payload.hasOwnProperty("requestId")) {
    return (
      <div className="flex flex-col w-full h-[70vh] justify-center items-center">
        <span className="text-[5rem] font-thin">⚠</span>
        <span className="text-lg font-thin">올바르지 않은 접근입니다.</span>
        <span className="text-sm font-medium">링크가 잘못되었거나 유효기간이 지났습니다.</span>
      </div>
    );
  }

  repairRequest = await repairRepository.getRepairRequestOrNull(
    payload.requestId
  );

  return (
    <div>
      <div>My Token: {params.token}</div>
      <div>Payload: {JSON.stringify(payload)} </div>
      <div>Request: {JSON.stringify(repairRequest)} </div>
    </div>
  );
}
