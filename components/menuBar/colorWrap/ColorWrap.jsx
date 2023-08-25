import React from "react";
import ColorWheel from "./ColorWheel";

const ColorWrap = () => {
  return (
    <div
      className="flex justify-between items-center
w-[100%]
flex-col
py-5
rounded-[10px]
    
bg-[#FFFFFF]
"
    >
      <ColorWheel />
    </div>
  );
};

export default ColorWrap;
