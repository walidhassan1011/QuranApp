import React from "react";
import { ChromePicker } from "react-color";
import { useStore } from "@/context/Store";
const ColorWheel = ({ color }) => {
  const { colors, setColors } = useStore();
  return (
    <div
      className="flex justify-center items-center
w-[100%]

        "
    >
      <ChromePicker
        disableAlpha={true}
        color={colors[color === "text" ? "color" : color.toLowerCase()]}
        onChange={(colorHex) => {
          setColors((prev) => {
            return {
              ...prev,
              [color === "text" ? "color" : color.toLowerCase()]: colorHex.hex,
            };
          });
        }}
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
