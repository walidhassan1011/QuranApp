"use client";

import React from "react";
import { Dropdown } from "flowbite-react";
import { BiSolidRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStore } from "@/context/Store";
import DropDown from "./dropdown/DropDown";
import DropDownItem from "./dropdown/DropDownItem";
import translationlang from "@/constants/translation";
const Navbar = () => {
  const { alert } = useStore();
  const {
    fetchSurahImage,
    generated,
    setGenerated,
    translation,
    setTranslation,
  } = useStore();
  const removeScrollInBody = () => {
    document.body.style.overflow = "hidden";
  };
  return (
    <nav
      className="flex justify-between items-center 
        py-4 bg-white px-[15px]
        sm:px-[10px]
        sm:fixed
        sm:top-0
        sm:z-50
        sm:w-[100%]
        
        
    "
    >
      <motion.div
        className="flex items-center 

        justify-around
       bg-[#F5F5F5]
        rounded-[10px]
        
        
        "
        transition={{ duration: 0.5 }}
        whileInView={{
          x: [-100, -50, 0],
          opacity: [0, 0.5, 1],
        }}
      >
        <DropDown
          style={
            "bg-[#F5F5F5] rounded-[5px]  p-2 flex justify-between  items-center w-[136px] border-[0px] cursor-pointer px-4 sm:px-2 sm:w-[110px]   "
          }
          onchange={(e) => {
            setTranslation(e.target.value);
          }}
        >
          <DropDownItem>English</DropDownItem>
          <DropDownItem>Arabic</DropDownItem>
        </DropDown>
      </motion.div>

      <div>
        <span
          style={{
            fontFamily: "basmallah",
          }}
          className="sm:text-[1rem] text-[2rem]"
        >
          ﷽
        </span>
      </div>
      <motion.div
        transition={{ duration: 0.5 }}
        whileInView={{
          x: [-100, -50, 0],
          opacity: [0, 0.5, 1],
        }}
      >
        <button
          className={`${alert ? "bg-[#0000006b]" : "bg-[black]"}
        rounded-[10px]
        px-5
        py-2
        text-white
        flex
        items-center
        justify-between
        sm:px-7
        sm:py-2
        
        sm:rounded-[5px]
        
        
        `}
          onClick={() => {
            removeScrollInBody();
            fetchSurahImage();
          }}
          disabled={alert}
        >
          <BiSolidRightArrow
            className={`
              ${translation === "English" ? "mr-2" : "ml-2"}
              sm:m-0
            `}
          />
          <span className="sm:hidden">
            {translation === "English"
              ? translationlang.en.generate
              : translationlang.ar.generate}
          </span>
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
