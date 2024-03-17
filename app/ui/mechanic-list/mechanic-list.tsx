import {
  Mechanic,
  MechanicRepository,
} from "@/app/lib/repository/mechanic-repository";
import MechanicRepositoryImpl from "@/app/lib/repository/mechanic-repository-impl";
import MechanicItem from "./mechanic-item";
import { UrlObject } from "url";

export default async function MechanicList({
  mechanicRepository,
  href,
}: {
  mechanicRepository: MechanicRepository;
  href?: object
}) {
  const mechanics: Mechanic[] = await mechanicRepository.getMechanics();

  return (
    <div className="flex flex-col gap-3">
      {(mechanics ?? []).map((value: Mechanic) => {
        const newRef: any = { ...href };

        if (newRef.query !== null && typeof newRef.query === "object") {
          newRef.query.mechanicId = value.id;
        } else {
          console.error("href.query가 object가 아닙니다.");
        }

        return (
          <MechanicItem
            name={value.name}
            address={value.address}
            rating={value.rating / 20}
            reliability={value.reliability.toString()}
            href={{ ...href }}
          />
        );
      })}
    </div>
  );
}
