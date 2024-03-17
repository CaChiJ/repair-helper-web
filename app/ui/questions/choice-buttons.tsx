"use client";

import { useState } from "react";

/**
 * 여러 개의 버튼 중 하나를 선택하는 UI.
 * 3개의 버튼 중 하나를 선택하는 케이스만 지원함.
 * @param {ButtonInfo[]} buttonInfos - 버튼에 들어갈 내용, 색상 등
 */
export default function ChoiceButtons({
  buttonInfos,
}: {
  buttonInfos: ButtonInfo[];
}) {
  const wrap = false;
  const grow = true;
  const [ toggledIdx, setToggledIdx ] = useState<null | number>(null);

  const buttons: React.ReactElement[] = [];

  for (let i = 0; i < buttonInfos.length; ++i) {
    const info = buttonInfos[i];
    let bgColor;
    let textColor;

    if (toggledIdx === i) {
      bgColor = info.toggledBgColor;
      textColor = info.toggledTextColor
    } else {
      bgColor = info.defaultBgColor;
      textColor = info.defaultTextColor;
    }

    buttons.push(
      <div
        key={i}
        className={`flex justify-center rounded items-center ${grow ? 'grow' : ''} h-full basis-0 bg-${bgColor} text-${textColor} shadow transition font-medium text-sm}`}
        onClick={() => {
          if (toggledIdx === i) {
            info.onToggled(false);
            setToggledIdx(null);
          } else {
            info.onToggled(true);
            setToggledIdx(i);
          }
        }}
      >
        {info.text}
      </div>
    );
  }

  return <div className={`flex ${ wrap ? 'flex-wrap' : '' } w-full h-full gap-4 items-center`}>{buttons}</div>;
}

export interface ButtonInfo {
  text: string;
  defaultBgColor: string;
  toggledBgColor: string;
  defaultTextColor: string;
  toggledTextColor: string;

  onToggled: (isToggled: boolean) => void;
}
