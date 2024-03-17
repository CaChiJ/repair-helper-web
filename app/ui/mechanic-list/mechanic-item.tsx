import Link from "next/link";
import type { UrlObject } from 'url';
type Url = string | UrlObject;

export default function MechanicItem({
  name,
  address,
  rating,
  reliability,
  href,
}: {
  name: string;
  address: string;
  rating: number;
  reliability: string;
  href?: object;
}) {
  return (
    <Link href={href ?? ""}>
      <div className="mx-5 h-[4.1rem] shadow rounded-lg py-[6px] px-[10px]">
        <div className="flex flex-row justify-between items-center h-5">
          <h3 className="text-base font-bold">{name}</h3>
          <span className="text-[8px]">{reliability}</span>
        </div>
        <h4 className="text-xs text-weak">{address}</h4>
        <h5 className="text-xs">{rating} / 5.0</h5>
      </div>
    </Link>
  );
}
