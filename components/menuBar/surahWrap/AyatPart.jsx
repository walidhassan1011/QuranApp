"use client";

import { versesInArabic } from "@/constants/ayatNumbers";
import { useStore } from "@/context/Store";
import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import DropDown from "../../dropdown/DropDown";
import DropDownItem from "../../dropdown/DropDownItem";
import translationlang from "@/constants/translation";
import { ToastContainer, toast } from "react-toastify";

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
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-center  items-center w-[50%] border-[0px] cursor-pointer px-4 "
            }
            selection={ayaNumber.start}
          >
            {Array?.from(Array(surah.toAya - surah.fromAya + 1)?.keys()).map(
              (item, index) => {
                return <DropDownItem key={index}>{item + 1}</DropDownItem>;
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
              "bg-[#F5F5F5] rounded-[5px]  p-1 flex justify-center  items-center w-[50%] border-[0px] cursor-pointer px-4"
            }
            selection={ayaNumber.end}
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
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 999999, marginTop: "80px" }}
        /> */}
      </div>
    </>
  );
};

export default AyatPart;
