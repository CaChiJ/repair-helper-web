import {
  RepairRepository,
  RepairRequestData,
} from "@/app/lib/repository/repair-repository";
import RepairRepositoryImpl from "@/app/lib/repository/repair-repository-impl";
import Headline from "@/app/ui/headline/headline";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const params = searchParams;
  const repairRepository: RepairRepository = new RepairRepositoryImpl();

  const isFilled =
    params.name !== undefined &&
    params.phone !== undefined &&
    params.address !== undefined &&
    params.mechanicId !== undefined &&
    params.isOnSite !== undefined &&
    params.isAgreed !== undefined &&
    params.dateTime !== undefined &&
    params.isBooted !== undefined &&
    params.isPowered !== undefined;

  if (isFilled) {
    try {
      const request: RepairRequestData = {
        name: params.name!,
        phone: params.phone!,
        address: params.address!,
        mechanic_id: params.mechanicId!,
        is_on_site: params.isOnSite! === "true",
        is_agreed: params.isAgreed! === "true",
        reservation_date: params.dateTime!,
        is_booted: parseBooleanOrNull(params.isBooted!),
        is_powered: parseBooleanOrNull(params.isPowered!),
      };

      repairRepository.addRepairRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="w-full h-1 bg-[#D9D9D9]">
        <div className="w-[100vw] h-1 bg-highlight" />
      </div>

      <div className="ml-6 mt-6 mb-7">
        <Headline
          title="기사님께 의뢰서를 보냈어요 🎉"
          description="기사님에게 응답이 오면 문자메시지로 알려드릴게요"
        />
      </div>
    </div>
  );
}

function parseBooleanOrNull(value: string): boolean | null {
  if (value === null) {
    return null;
  }

  return value === "true";
}
