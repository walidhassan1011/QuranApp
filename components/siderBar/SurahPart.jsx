"use client";
import { versesInArabic } from "@/constants/ayatNumbers";

import { useStore } from "@/context/Store";

import React from "react";

import DropDown from "../dropdown/DropDown";
import DropDownItem from "../dropdown/DropDownItem";
import translationlang from "@/constants/translation";

const SurahPart = () => {
  const { surahName, setSurahName, translation } = useStore();

  return (
    <div
      className="flex justify-between items-center
        
        p-1
        px-2
        
        w-[100%]
        

    "
    >
      <span>
        {translation === "English"
          ? translationlang.en.name
          : translationlang.ar.name}
      </span>
      <DropDown
        onchange={(e) => {
          setSurahName(e.target.value);
        }}
        style={
          "bg-[#F5F5F5] rounded-[5px]  p-2 flejustify-between  items-center w-[175px] border-[0px] cursor-pointer px-4"
        }
      >
        {versesInArabic?.map((item, index) => {
          return <DropDownItem key={index}>{item.surahName}</DropDownItem>;
        })}
      </DropDown>
    </div>
  );
};

export default SurahPart;
