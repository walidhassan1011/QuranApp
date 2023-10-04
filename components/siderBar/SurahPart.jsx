"use client";
import { versesInArabic } from "@/constants/ayatNumbers";

import { useStore } from "@/context/Store";

import React, { useState } from "react";

import DropDown from "../dropdown/DropDown";
import DropDownItem from "../dropdown/DropDownItem";
import translationlang from "@/constants/translation";
import SurahFullName from "@/constants/SurahFullNames";

const SurahPart = () => {
  const {
    surahId,
    setSurahId,
    surahName,
    setSurahName,
    translation,
    setAyaNumber,
  } = useStore();

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
          const localsurahId = e.target.value;

          const surahName = versesInArabic[localsurahId].surahName;

          setSurahName(surahName);
          setSurahId(localsurahId);
        }}
        style={
          "bg-[#F5F5F5] rounded-[5px]  p-2 flejustify-between  items-center w-[175px] border-[0px] cursor-pointer px-4"
        }
        selection={surahId}
      >
        {SurahFullName?.map((item, index) => {
          return (
            <DropDownItem key={index} value={index}>
              {item}
            </DropDownItem>
          );
        })}
      </DropDown>
    </div>
  );
};

export default SurahPart;
