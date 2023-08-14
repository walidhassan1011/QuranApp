import React from "react";
import ColorSelector from "./ColorSelector";
import { useStore } from "@/context/Store";
import translationlang from "@/constants/translation";

const Customize = ({ title, toggle, open, setOpen }) => {
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
          <ColorSelector
            title={title}
            toggle={toggle}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Customize;
