"use client";

import Headline from "@/app/ui/headline/headline";
import ChoiceButtons, { ButtonInfo } from "@/app/ui/questions/choice-buttons";
import QuestionSentences from "@/app/ui/questions/question-sentences";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import TimePicker from "@/app/ui/time-picker/time-picker";

export default function Page() {
  return (
    <div>
      <div className="w-full h-1 bg-[#D9D9D9]">
        <div className="w-[80vw] h-1 bg-highlight" />
      </div>

      <div className="ml-6 mt-6 mb-7">
        <Headline
          title="Step 3. 예약"
          description="거의 다 됐어요! 편한 일정을 선택해주세요."
        />
      </div>

      <Suspense>
        <InputForm />
      </Suspense>
    </div>
  );
}

function InputForm(): JSX.Element {
  const searchParams = Object.fromEntries(useSearchParams())

  const [isOnSite, setIsOnSite] = useState<null | boolean>(null);
  const [date, setDate] = useState<undefined | Date>();
  const [time, setTime] = useState<string>("10:00");

  const isFilled = isOnSite !== null && date !== undefined;
  let dateTime: Date = new Date();

  if (isFilled) {
    dateTime = new Date(date);
    dateTime.setHours(parseInt(time.split(":")[0]));
    dateTime.setMinutes(parseInt(time.split(":")[1]));
  }

  return (
    <div>
      <div className="mt-7 ml-6 mr-6">
        <QuestionSentences
          text="Q. 희망하는 수리 방식을 알려주세요"
          description="출장비가 별도로 부과될 수 있음에 유의해주세요."
        />
        <div className="mt-3 h-12">
          <ChoiceButtons
            buttonInfos={[
              makeButtonInfo(
                "출장 수리",
                divergeCallback(
                  () => setIsOnSite(true),
                  () => setIsOnSite(null)
                )
              ),
              makeButtonInfo(
                "직접 방문",
                divergeCallback(
                  () => setIsOnSite(false),
                  () => setIsOnSite(null)
                )
              ),
            ]}
          />
        </div>
      </div>

      <div className="mt-7 ml-6 mr-6">
        <QuestionSentences
          text="Q. 희망하는 수리 날짜와 시간을 알려주세요"
          description="해당 날짜에 수리가 불가능하면 다시 알려드릴게요."
        />

        <Calendar
          className="flex justify-center"
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />

        <div className="flex justify-center mt-3">
          <TimePicker
            onChange={(hour: number, minute: number) => {
              setTime(`${hour}:${minute}`);
            }}
            defaultHour={parseInt(time.split(":")[0])}
            defaultMinute={parseInt(time.split(":")[1])}
          />
        </div>
      </div>

      <div className="h-8" />

      <Link
        className={`${
          isFilled ? "" : "pointer-events-none"
        } relative left-0 right-0 bottom-0 flex justify-center items-center rounded-xl ${
          isFilled ? "text-white" : "text-black"
        } ${
          isFilled ? "bg-highlight" : "bg-[#D9D9D9]"
        } text-lg font-bold h-14 mx-3 mb-3 shadow transition`}
        href={{
          pathname: "/reservation/step4",
          query: {
            ...searchParams,
            isOnSite: isOnSite,
            dateTime: dateTime?.toISOString(),
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
  };
}
