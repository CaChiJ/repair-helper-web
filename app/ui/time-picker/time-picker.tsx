'use client';

import "./time-picker.css";
import backArrow from "@/public/images/arrow-back.svg";
import forwardArrow from "@/public/images/arrow-forward.svg";
import Image from "next/image";
import { useState } from "react";

export default function TimePicker({
  onChange,
  defaultHour,
  defaultMinute,
}: {
  onChange: (hour: number, minute: number) => void;
  defaultHour: number;
  defaultMinute: number;
}) {
  const [hour, setHour] = useState<number>(defaultHour);
  const [minute, setMinute] = useState<number>(defaultMinute);

  function addHour(amount: number) {
    let result = hour + amount;

    if (result >= 24) {
      result = 0 + result % 24;
    }

    while (result < 0) {
      result = 24 + result
    }

    setHour(result);
    onChange(result, minute);
  }

  function addMinute(amount: number) {
    let result = minute + amount;

    if (result >= 60) {
      result = 0 + result % 60;
    }

    while (result < 0) {
      result = 60 + result
    }

    setMinute(result);
    onChange(hour, result);
  }

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-row w-24 h-12 rounded-sm bg-distinct" >
        <Image onClick={(e) => {addHour(-1)}} src={backArrow} alt="back" className="flex h-12 w-8 pl-3 "/>
        <span className="flex justify-center items-center w-full h-full rounded-sm bg-transparent">{hour}</span>
        <Image onClick={(e) => {addHour(+1)}} src={forwardArrow} alt="forward" className="h-12 w-8 px-1.5" />
      </div>
      <span className="ml-1">시</span>

      <span className="w-5"/>
      
      <div className="flex flex-row w-24 h-12 rounded-sm bg-distinct" >
        <Image onClick={(e) => {addMinute(-10)}} src={backArrow} alt="back" className="flex h-12 w-8 pl-3 "/>
        <span className="flex justify-center items-center w-full h-full rounded-sm bg-transparent">{minute}</span>
        <Image onClick={(e) => {addMinute(+10)}} src={forwardArrow} alt="forward" className="h-12 w-8 px-1.5" />
      </div>
      <span className="ml-1">분</span>
    </div>
  );
}
