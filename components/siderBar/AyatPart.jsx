"use client";

import { versesInArabic } from "@/constants/ayatNumbers";
import { useStore } from "@/context/Store";

import React, { useState } from "react";
import DropDown from "../dropdown/DropDown";
import DropDownItem from "../dropdown/DropDownItem";
import translationlang from "@/constants/translation";

const AyatPart = () => {
  const {
    ayaNumber,
    setAyaNumber,
    surahName,
    setSurahName,
    translation,
    alert,
    setAlert,
  } = useStore();

  const surah = versesInArabic?.find((item) => item?.surahName === surahName);

  return (
    <>
      <div
        className="flex justify-between
        w-[100%]
        
        p-2
      items-center"
      >
        <span className={`${translation === "English" ? "mr-8" : "ml-8"}`}>
          {translation === "English"
            ? translationlang.en.range
            : translationlang.ar.range}
        </span>
        <div
          className="flex justify-between
         
          w-[100%]
        
          p-2
          px-0
         
          
          
        items-center"
        >
          <DropDown
            onchange={(e) => {
              setAyaNumber({ ...ayaNumber, start: parseInt(e.target.value) });
              if (e.target.value < ayaNumber.end && alert === true) {
                setAlert(false);
                return;
              }

              if (e.target.value > ayaNumber.end && alert === false) {
                setAlert(true);
                return;
              }
              if (e.target.value > ayaNumber.end && alert === true) {
                setAlert(true);
                return;
              } else {
                setAlert(false);
              }
            }}
            style={
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-between  items-center w-[85px] border-[0px] cursor-pointer px-4 mr-2"
            }
            selection={ayaNumber.start}
          >
            {Array?.from(Array(surah.toAya - surah.fromAya + 1)?.keys()).map(
              (item, index) => {
                return (
                  <DropDownItem value={index + 1} key={index}>
                    {item + 1}
                  </DropDownItem>
                );
              }
            )}
          </DropDown>
          <DropDown
            onchange={(e) => {
              setAyaNumber({ ...ayaNumber, end: parseInt(e.target.value) });
              if (e.target.value > ayaNumber.start && alert === true) {
                setAlert(false);
                return;
              }

              if (e.target.value < ayaNumber.start && alert === false) {
                setAlert(true);
                return;
              }
              if (e.target.value < ayaNumber.start && alert === true) {
                setAlert(true);
                return;
              } else {
                setAlert(false);
              }
            }}
            style={
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-between  items-center w-[85px] border-[0px] cursor-pointer px-4"
            }
            selection={ayaNumber.end}
          >
            {Array?.from(Array(surah.toAya - surah.fromAya + 1)?.keys()).map(
              (item, index) => {
                return (
                  <DropDownItem value={index + 1} key={index}>
                    {item + 1}
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
