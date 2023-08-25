"use client";

import { versesInArabic } from "@/constants/ayatNumbers";
import { useStore } from "@/context/Store";
import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import DropDown from "../../dropdown/DropDown";
import DropDownItem from "../../dropdown/DropDownItem";
import translationlang from "@/constants/translation";

const AyatPart = () => {
  const { ayaNumber, setAyaNumber, surahName, setSurahName, translation } =
    useStore();
  const [hightRange, setHightRange] = useState(false);

  const surah = versesInArabic?.find((item) => item?.surahName === surahName);

  return (
    <>
      <div
        className=" justify-center
        w-[100%]
        hidden
        sm:!flex
        
        p-6
        py-2
      items-center"
      >
        <span className={`${translation === "English" ? "mr-7" : "ml-8"}`}>
          {translation === "English"
            ? translationlang.en.range
            : translationlang.ar.range}
        </span>
        <div
          className="flex justify-center
         
          w-[100%]
        gap-4
          p-2
          px-0
         
          
          
        items-center"
        >
          <DropDown
            onchange={(e) => {
              setAyaNumber({ ...ayaNumber, start: e.target.value });
            }}
            style={
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-center  items-center w-[50%] border-[0px] cursor-pointer px-4 "
            }
          >
            {Array?.from(Array(surah.toAya - surah.fromAya + 1)?.keys()).map(
              (item, index) => {
                return <DropDownItem key={index}>{item + 1}</DropDownItem>;
              }
            )}
          </DropDown>
          <DropDown
            onchange={(e) => {
              setAyaNumber({ ...ayaNumber, end: e.target.value });
            }}
            style={
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-center  items-center w-[50%] border-[0px] cursor-pointer px-4"
            }
          >
            {Array?.from(Array(surah?.toAya - surah?.fromAya + 1)?.keys()).map(
              (item, index) => {
                return (
                  <DropDownItem key={index}>
                    {surah?.fromAya + item}
                  </DropDownItem>
                );
              }
            )}
          </DropDown>
        </div>
      </div>
    </>
  );
};

export default AyatPart;
