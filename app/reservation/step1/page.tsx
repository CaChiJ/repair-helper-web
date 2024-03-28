'use client';

import Headline from "@/app/ui/headline/headline";
import ChoiceButtons, { ButtonInfo } from "@/app/ui/questions/choice-buttons";
import QuestionSentences from "@/app/ui/questions/question-sentences";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [ isPowered, setIsPowered ] = useState<null | string>(null);
  const [ isBooted, setIsBooted ] = useState<null | string>(null);
  const [ deviceType, setDeviceType ] = useState<null | string>(null);
  const [ osType, setOsType] = useState<null | string>(null);

  const isFilled = isPowered !== null && isBooted !== null && deviceType !== null && osType !== null;

  return (
    <div>
      <div className="w-full h-1 bg-[#D9D9D9]">
        <div className="w-[20vw] h-1 bg-highlight" />
      </div>

      <div className="ml-6 mt-6">
        <Headline
          title={"Step 1. 증상"}
          description={"어떤 고장인지 기사님께 전해드릴게요!"}
        />
      </div>

      <div className="mt-7 ml-6 mr-6">
        <QuestionSentences
          text="Q. 컴퓨터 종류는 무엇인가요?"
          description="수리를 의뢰하고자 하는 기기의 종류를 알려주세요!"
        />
        <div className="mt-3 h-12">
          <ChoiceButtons
            buttonInfos={[
              makeButtonInfo("데스크탑", divergeCallback(() => setDeviceType('desktop'), () => setDeviceType(null))),
              makeButtonInfo("노트북", divergeCallback(() => setDeviceType('notebook'), () => setDeviceType(null)))
            ]}
          />
        </div>
      </div>

      <div className="mt-7 ml-6 mr-6">
        <QuestionSentences
          text="Q. OS는 무엇인가요?"
          description="운영체제가 뭔가요?"
        />
        <div className="mt-3 h-12">
          <ChoiceButtons
            buttonInfos={[
              makeButtonInfo("윈도우", divergeCallback(() => setOsType('windows'), () => setOsType(null))),
              makeButtonInfo("맥", divergeCallback(() => setOsType('mac'), () => setOsType(null))),
              makeButtonInfo("모르겠어요", divergeCallback(() => setOsType('unknown'), () => setOsType(null))),
            ]}
          />
        </div>
      </div>

      <div className="mt-7 ml-6 mr-6">
        <QuestionSentences
          text="Q. 본체 전원이 잠깐이라도 켜지나요?"
          description="본체 버튼에 불이 들어오거나 컴퓨터의 팬이 돌아가는 소음이 들리나요?"
        />
        <div className="mt-3 h-12">
          <ChoiceButtons
            buttonInfos={[
              makeButtonInfo("네", divergeCallback(() => setIsPowered('true'), () => setIsPowered(null))),
              makeButtonInfo("아니요", divergeCallback(() => setIsPowered('false'), () => setIsPowered(null))),
              makeButtonInfo("모르겠어요", divergeCallback(() => setIsPowered('unknown'), () => setIsPowered(null))),
            ]}
          />
        </div>
      </div>

      <div className="mt-9 ml-6 mr-6">
        <QuestionSentences
          text="Q. 바탕화면까지 들어가지나요?"
          description="전원버튼을 누르고 기다리면 바탕화면이 표시되나요?"
        />
        <div className="mt-3 h-12">
          <ChoiceButtons
            buttonInfos={[
              makeButtonInfo("네", divergeCallback(() => setIsBooted('true'), () => setIsBooted(null))),
              makeButtonInfo("아니요", divergeCallback(() => setIsBooted('false'), () => setIsBooted(null))),
              makeButtonInfo("모르겠어요", divergeCallback(() => setIsBooted('unknown'), () => setIsBooted(null))),
            ]}
          />
        </div>
      </div>

      <div className="h-8" />

      <Link
        className={`relative left-0 right-0 bottom-0 flex justify-center items-center rounded-xl ${ isFilled ? 'text-white' : 'text-black' } ${ isFilled ? 'bg-highlight' : 'bg-[#D9D9D9]' } text-lg font-bold h-14 mx-3 mb-3 shadow transition`}
        href={{
          pathname: `${isFilled ? '/reservation/step2' : ''}`,
          query: {isPowered: isPowered, isBooted: isBooted, deviceType: deviceType, osType: osType}
        }}
      >
        작성 완료
      </Link>
    </div>
  );
}


function makeButtonInfo(
  text: string,
  onToggled: (isToggled: boolean) => void
): ButtonInfo {
  return {
    text: text,
    defaultBgColor: "white",
    toggledBgColor: "highlight",
    defaultTextColor: "black",
    toggledTextColor: "white",
    onToggled: onToggled,
  };
}


function divergeCallback(whenTrue: () => void, whenFalse: () => void) {
    return (value: boolean) => {
        if (value) {
            whenTrue();
        } else {
            whenFalse();
        }
    }
}