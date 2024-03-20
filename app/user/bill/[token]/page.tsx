import { verifyOrNull } from "@/app/lib/auth/jwt";
import { RepairRepository } from "@/app/lib/repository/repair-repository";
import RepairRepositoryImpl from "@/app/lib/repository/repair-repository-impl";

export default async function Page({ params }: { params: { token: string } }) {
  const repairRepository: RepairRepository = new RepairRepositoryImpl();

  const payload: any = verifyOrNull(params.token);
  let repairRequest = null;

  if (payload !== null && payload.hasOwnProperty("requestId")) {
    repairRequest = await repairRepository.getRepairRequestOrNull(
      payload.requestId
    );
  }

  return (
    <div>
      <div>My Token: {params.token}</div>
      <div>Payload: {JSON.stringify(payload)} </div>
      <div>Request: {JSON.stringify(repairRequest)} </div>
    </div>
  );
}
