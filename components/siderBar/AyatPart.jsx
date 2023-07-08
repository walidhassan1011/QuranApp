"use client";

import { versesInArabic } from "@/constants/ayatNumbers";
import { useStore } from "@/context/Store";
import { Dropdown } from "flowbite-react";
import React from "react";
import DropDown from "../dropdown/DropDown";
import DropDownItem from "../dropdown/DropDownItem";
import translationlang from "@/constants/translation";

const AyatPart = () => {
  const { ayaNumber, setAyaNumber, surahName, setSurahName, translation } =
    useStore();

  const surah = versesInArabic?.find((item) => item?.surahName === surahName);

  return (
    <>
      <div
        className="flex justify-between
        w-[100%]
        
        p-2
      items-center"
      >
        <span
          className="
          mr-8
        "
        >
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
            onChange={(e) => {
              setAyaNumber({ ...ayaNumber, start: e.target.value });
              console.log(e.target.value);
            }}
            style={
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-between  items-center w-[85px] border-[0px] cursor-pointer px-4 mr-2"
            }
          >
            {Array?.from(Array(surah?.toAya)?.keys()).map((item, index) => {
              return (
                <DropDownItem key={index} o>
                  {item + 1}
                </DropDownItem>
              );
            })}
          </DropDown>
          <DropDown
            onChange={(e) => {
              setAyaNumber({ ...ayaNumber, end: e.target.value });
            }}
            style={
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-between  items-center w-[85px] border-[0px] cursor-pointer px-4"
            }
          >
            {Array?.from(Array(surah?.toAya - surah?.fromAya + 1)?.keys()).map(
              (item, index) => {
                return (
                  <DropDownItem key={index} o>
                    {surah?.fromAya + item}
                  </DropDownItem>
                );
              }
            )}
          </DropDown>
          {/* {Array?.from(Array(surah?.toAya)?.keys()).map((item, index) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setAyaNumber({ ...ayaNumber, start: item + 1 });
                    }}
                    key={index}
                  >
                    {item + 1}
                  </Dropdown.Item>
                );
              })} */}

          {/* {Array?.from(
                Array(surah?.toAya - surah?.fromAya + 1)?.keys()
              ).map((item, index) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setAyaNumber({
                        ...ayaNumber,
                        end: item + surah?.fromAya,
                      });
                    }}
                    key={index}
                  >
                    {item + surah?.fromAya}
                  </Dropdown.Item>
                );
              })} */}
        </div>
      </div>
    </>
  );
};

export default AyatPart;
