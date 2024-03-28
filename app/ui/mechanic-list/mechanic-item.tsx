import Link from "next/link";
import Image from "next/image";
import starIcon from "@/public/images/star.svg";
import blueCheckIcon from "@/public/images/blue-check.svg";
import yellowCautionIcon from "@/public/images/yello-caution.svg";

import type { UrlObject } from 'url';
type Url = string | UrlObject;

export default function MechanicItem({
  name,
  address,
  rating,
  repairCount,
  yearOfCareer,
  reliability,
  href,
}: {
  name: string;
  address: string;
  rating: number;
  repairCount: number;
  yearOfCareer: number;
  reliability: string;
  href?: object;
}) {
  return (
    <Link href={href ?? ""}>
      <div className="mx-5 h-[7.5rem] shadow rounded-lg py-[6px] px-[10px]">
        <div className="flex flex-row justify-between items-center h-5">
          <h3 className="text-base font-bold">{name}</h3>
          <div className="flex flex-row gap-1 items-center">
            <Image src={reliability === "safe" ? blueCheckIcon : yellowCautionIcon} alt="blue check" />
            <span className="text-[10px]">{reliability === "safe" ? "안전" : "주의"}</span>
          </div>
        </div>
        <h4 className="text-xs text-weak">{address}</h4>
        <h4 className="text-sm mt-2">{`- 검증된 수리 결과 ${repairCount}회`}</h4>
        <h4 className="text-sm mb-2">{`- 경력 ${yearOfCareer}년`}</h4>
        <div className="flex flex-row items-center">
          <Image src={starIcon} alt='rating'/>
          <span className="w-1"></span>
          <h5 className="text-xs">{rating} / 5.0</h5>
        </div>
      </div>
    </Link>
  );
}
