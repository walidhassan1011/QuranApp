import React from "react";
import ColorWheel from "./ColorWheel";

const ColorWrap = ({ color }) => {
  return (
    <div
      className="flex justify-between items-center
w-[100%]
flex-col
py-5
rounded-[10px]
    

"
    >
      <ColorWheel color={color} />
    </div>
  );
};

export default ColorWrap;
