import React from "react";
import ColorSelector from "./ColorSelector";
import { useStore } from "@/context/Store";
import translationlang from "@/constants/translation";

const Customize = ({ title }) => {
  const { translation } = useStore();
  return (
    <>
      <div
        className="flex justify-between
      w-[100%]
      p-2
      items-center
      
    "
      >
        <span
          className="
            capitalize
          "
        >
          {translation === "English" ? title : translationlang.ar[title]}
        </span>
        <div className="flex justify-between items-center">
          <ColorSelector title={title} />
        </div>
      </div>
    </>
  );
};

export default Customize;
