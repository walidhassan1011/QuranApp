import React from "react";
import { ChromePicker } from "react-color";

const ColorWheel = () => {
  return (
    <div
      className="flex justify-center items-center
w-[100%]

        "
    >
      <ChromePicker
        disableAlpha={true}
        color="#1F396E"
        styles={{
          default: {
            picker: {
              width: "60%",
              height: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default ColorWheel;
