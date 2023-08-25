"use strict";

import { useStore } from "@/context/Store";
import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
const styles = reactCSS({
  default: {
    color: {
      width: "30px",
      height: "30px",
      borderRadius: "5px",

      cursor: "pointer",
    },
    swatch: {
      padding: "5px",
      border: "none",
      borderRadius: "5px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "2",
    },
    cover: {
      position: "fixed",
      top: "-30px",
      right: "-20px",

      left: "-20px",
    },
  },
});

const ColorSelector = ({ title, toggle, open, setOpen }) => {
  const { colors, setColors } = useStore();
  // onclick outside the color picker to close it
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(null);
      }
    };

    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.addEventListener("click", handleOutsideClick, true);
    };
  }, []);

  return (
    <>
      <div
        className="
        relative

       
        
        "
      >
        <div
          style={{
            ...styles.color,
            backgroundColor: colors[title] ? colors[title] : "#000000",
            border: open ? "1px solid #4687ff" : "1px solid #c7c7c7",
          }}
          onClick={toggle}
        />

        {open ? (
          <div
            className="
            absolute
            top-[-300px]
            left-[60px]
            right-0
            bottom-0
            z-10
            
            w-[180px]
           
            "
            ref={ref}
          >
            <SketchPicker
              color={colors[title]}
              onChange={(color) => {
                setColors((prev) => {
                  return {
                    ...prev,
                    [title]: color.hex,
                  };
                });
              }}
              styles={{
                default: {
                  picker: {
                    width: "100%",
                  },
                },
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ColorSelector;
