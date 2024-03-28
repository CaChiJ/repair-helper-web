import {
  Mechanic,
  MechanicRepository,
} from "@/app/lib/repository/mechanic-repository";
import MechanicItem from "./mechanic-item";

export default async function MechanicList({
  mechanicRepository,
  href,
}: {
  mechanicRepository: MechanicRepository;
  href?: object
}) {
  const mechanics: Mechanic[] = await mechanicRepository.getMechanics();
  console.log(mechanics);

  return (
    <div className="flex flex-col gap-3">
      {(mechanics ?? []).map((value: Mechanic, index: number) => {
        const newRef: any = { ...href };

        if (newRef.query !== null && typeof newRef.query === "object") {
          newRef.query.mechanicId = value.id;
        } else {
          console.error("href.query가 object가 아닙니다.");
        }

        return (
          <MechanicItem
            key={index}
            name={value.name}
            address={value.address}
            repairCount={value.repairCount ?? 0}
            yearOfCareer={value.yearOfCareer ?? 1}
            rating={value.rating / 20}
            reliability={value.reliability.toString()}
            href={{ ...href }}
          />
        );
      })}
    </div>
  );
}
