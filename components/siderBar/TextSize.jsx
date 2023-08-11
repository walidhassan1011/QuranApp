"use client";
import translationlang from "@/constants/translation";
import { useStore } from "@/context/Store";
import React from "react";

const TextSize = () => {
  const { textSize, setTextSize, translation } = useStore();

  return (
    <>
      <div
        className="flex justify-between 
        w-[100%]
        items-center
        p-2
        
      "
      >
        <span>
          {translation === "English"
            ? translationlang.en.textSize
            : translationlang.ar.textSize}
        </span>
        <div
          className="flex justify-between items-center 
       
        
       
        "
        >
          <input
            type="number"
            name=""
            min={16}
            value={textSize}
            onChange={(e) => {
              setTextSize(e.target.value);
            }}
            id=""
            className="w-[60px] h-[30px] rounded-[5px] 
            
            border-[1px] border-[#E5E5E5] text-center"
          />
        </div>
      </div>
    </>
  );
};

export default TextSize;
