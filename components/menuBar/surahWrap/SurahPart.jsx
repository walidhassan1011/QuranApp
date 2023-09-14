import React from "react";
import DropDown from "../../dropdown/DropDown";
import DropDownItem from "../../dropdown/DropDownItem";
import translationlang from "@/constants/translation";
import { versesInArabic } from "@/constants/ayatNumbers";
import { useStore } from "@/context/Store";
import SurahFullName from "@/constants/SurahFullNames";
const SurahPart = () => {
  const { surahName, setSurahName, translation, setAyaNumber } = useStore();
  return (
    <div
      className="flex justify-between items-center

      
p-6
py-2
w-[100%]

gap-[2rem]



"
    >
      <span>
        {translation === "English"
          ? translationlang.en.name
          : translationlang.ar.name}
      </span>
      <DropDown
        onchange={(e) => {
          const surahId = parseInt(e.target.value.split(" ")[0]);

          const surahName = versesInArabic.find((item) => {
            if (item.id === surahId) {
              return item.surahName;
            }
          });

          setSurahName(surahName.surahName);
          setAyaNumber({
            start: 1,
            end: 1,
          });
        }}
        style={
          "bg-[#F5F5F5] rounded-[5px]  p-2 flejustify-between  items-center w-[100%] border-[0px] cursor-pointer px-4"
        }
      >
        {SurahFullName?.map((item, index) => {
          return <DropDownItem key={index}>{item}</DropDownItem>;
        })}
      </DropDown>
    </div>
  );
};

export default SurahPart;
