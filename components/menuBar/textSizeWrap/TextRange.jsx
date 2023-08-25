import { useStore } from "@/context/Store";
import React from "react";

const TextRange = () => {
  const { textSize, setTextSize, translation } = useStore();
  return (
    <>
      <input
        type="range"
        name=""
        id="range1"
        min="1"
        max="100"
        className="w-[80%]  bg-[#1F396E] rounded-[5px]"
        onChange={(e) => {
          setTextSize(e.target.value);
        }}
        value={textSize}
      />
      <div
        className="flex justify-between items-center 
        px-3
        py-[0.6rem]
        font-bold
    
        bg-[#F4F4F4] rounded-[5px]
      "
      >
        <span>{textSize}</span>
      </div>
    </>
  );
};

export default TextRange;
