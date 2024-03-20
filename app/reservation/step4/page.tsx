"use client";

import Headline from "@/app/ui/headline/headline";
import Link from "next/link";
import { useState } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const isFilled = name !== "" && phone !== "" && address !== "" && isAgreed;

  return (
    <div>
      <div className="w-full h-1 bg-[#D9D9D9]">
        <div className="w-[93vw] h-1 bg-highlight" />
      </div>

      <div className="ml-6 mt-6 mb-7">
        <Headline
          title="Step 4. 의뢰자 정보"
          description="이제 정말 마지막이에요! 👏"
        />
      </div>

      <div className="flex flex-col gap-5 w-full px-6">
        <div>
          <span className="flex flex-col font-medium text-sm mb-1 ml-1">
            이름
          </span>
          <input
            type="text"
            className="bg-[#EEEEEE] rounded-sm w-full h-8 px-2 py-1"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <span className="flex flex-col font-medium text-sm mb-1 ml-1">
            전화번호
          </span>
          <input
            type="text"
            className="bg-[#EEEEEE] rounded-sm w-full h-8 px-2 py-1"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div>
          <span className="flex flex-col font-medium text-sm mb-1 ml-1">
            출장 주소
          </span>
          <input
            type="text"
            className="bg-[#EEEEEE] rounded-sm w-full h-8 px-2 py-1"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" className="w-4 h-4" onChange={(event) => {setIsAgreed(event.target.checked)}} />
          <div className="flex flex-col ">
            <span className="font-medium text-xs">
              (필수) 개인정보 수집 및 이용에 동의합니다.
            </span>
            <span className="text-[0.7rem]">자세히 보기</span>
          </div>
        </div>
      </div>

      <Link
        className={`${
          isFilled ? "" : "pointer-events-none"
        } fixed left-0 right-0 bottom-0 flex justify-center items-center rounded-xl ${
          isFilled ? "text-white" : "text-black"
        } ${
          isFilled ? "bg-highlight" : "bg-[#D9D9D9]"
        } text-lg font-bold h-14 mx-3 mb-3 shadow transition`}
        href={{
          pathname: "/reservation/complete",
          query: {
            ...searchParams,
            name: name,
            phone: phone,
            address: address,
            isAgreed: isAgreed,
          },
        }}
        aria-disabled={!isFilled}
        tabIndex={isFilled ? undefined : -1}
      >
        작성 완료
      </Link>
    </div>
  );
}
