"use client";

import React from "react";
import DropDown from "../../dropdown/DropDown";
import DropDownItem from "../../dropdown/DropDownItem";
import { useStore } from "@/context/Store";
import translationlang from "@/constants/translation";

const Translation = () => {
  const { translation, setUseTranslation } = useStore();
  return (
    <>
      <div
        className="flex justify-between
        w-[100%]
        items-center
        p-6
        py-2
      
      "
      >
        <span>
          {translation === "English"
            ? translationlang.en.translation
            : translationlang.ar.translation}
        </span>
        <div
          className={`flex justify-between
        items-center
        w-[100%]
       gap-[1rem]
        ${translation === "English" ? "ml-2" : "mr-2"}
        `}
        >
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setUseTranslation(e.target.checked)}
              className={`

            ${translation === "English" ? "ml-1" : "mr-6"}
            cursor-pointer
              checked:bg-[#000000]
              rounded-[5px]
              w-[20px]
              h-[20px]
              bg-[#F5F5F5]
              border-none
            `}
            />
          </div>

          <div
            className="bg-[#F5F5F5] rounded-[10px]
            w-[85%]
          "
          >
            <DropDown
              style={
                "bg-[#F5F5F5] rounded-[5px] p-1 flejustify-between  items-center w-[100%] border-[0px] cursor-pointer px-4"
              }
            >
              <DropDownItem>English</DropDownItem>;
            </DropDown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Translation;
