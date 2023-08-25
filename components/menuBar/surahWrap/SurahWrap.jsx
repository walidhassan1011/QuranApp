import React from "react";
import AyatPart from "./AyatPart";
import SurahPart from "./SurahPart";
import Translation from "./Translation";

const SurahWrap = () => {
  return (
    <div
      className="flex justify-between items-center
w-[100%]
flex-col
py-2
rounded-[10px]
bg-[#FFFFFF]
"
    >
      <SurahPart />
      <AyatPart />
      <Translation />
    </div>
  );
};

export default SurahWrap;
