"use client";

import React from "react";
import { BsThreeDots, BsBook } from "react-icons/bs";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { motion } from "framer-motion";
import { useStore } from "@/context/Store";
import { AnimatePresence } from "framer-motion";
import SurahWrap from "./surahWrap/SurahWrap";
import TextWrap from "./textSizeWrap/TextWrap";
import ColorWrap from "./colorWrap/ColorWrap";

const MenuBar = () => {
  const { colors, setColors, translation } = useStore();
  const [open, setOpen] = React.useState(false);
  const toggle = (title) => {
    if (open === title) {
      return setOpen(null);
    }

    setOpen(title);
  };

  const listItems = [
    {
      id: 1,
      name: "Surah",
      subName: "",
      icon: (
        <BsBook className="text-[#1F396E] text-[1.4rem] leading-[1.9rem]" />
      ),
    },
    {
      id: 2,
      name: "Text",
      subName: "Size",
      icon: (
        <RxLetterCaseCapitalize
          className="text-[#1F396E] text-[1.4rem] leading-[1.9rem]
                      font-bold
                  "
        />
      ),
    },
    {
      id: 3,
      name: "text",
      subName: "Color",
      icon: (
        <div
          className={`w-[30px]
                border-[1px] border-solid border-[#1F396E]
              h-[30px] rounded-[5px] `}
          style={{ backgroundColor: colors.color }}
        />
      ),
    },
    {
      id: 4,
      name: "Background ",
      subName: "",
      icon: (
        <div
          className="w-[30px]
              h-[30px] rounded-[5px] 
              border-[1px] border-solid border-[#1F396E]
              "
          style={{ backgroundColor: colors.background }}
        />
      ),
    },
    {
      id: 5,
      name: "Assets",
      subName: "",
      icon: (
        <div
          className="w-[30px]
          border-[1px] border-solid border-[#1F396E]
              h-[30px] rounded-[5px] "
          style={{ backgroundColor: colors.assets }}
        />
      ),
    },
  ];
  return (
    <>
      <>
        <AnimatePresence>
          {open === 1 && (
            <motion.div
              className=" justify-between items-center 
      flex-col
      w-[100%]
      
      backdrop-blur-lg
      
      hidden
      sm:!flex
     p-2
      py-4
     
      
     fixed
     
      left-[0px]
      "
              initial={{
                bottom: -100,
              }}
              animate={{
                bottom: 100,
              }}
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
              exit={{
                bottom: -100,
              }}
            >
              <SurahWrap />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {
            // Text Size
            open === 2 && (
              <motion.div
                className=" justify-between items-center 
      flex-col
      w-[100%]
   
      backdrop-blur-lg
      hidden
      sm:!flex
     p-2
      
   
     fixed
     
     
      left-[0px]
      "
                initial={{
                  bottom: -100,
                }}
                animate={{
                  bottom: 100,
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                exit={{
                  bottom: -100,
                }}
              >
                <TextWrap />
              </motion.div>
            )
          }
        </AnimatePresence>
        <AnimatePresence>
          {
            // Text Color
            open === 3 && (
              <motion.div
                className=" justify-between items-center 
    flex-col
    w-[100%]
 
    backdrop-blur-lg
    hidden
    sm:!flex
   p-2
    
 
   fixed
   
   
    left-[0px]
    "
                initial={{
                  bottom: -100,
                }}
                animate={{
                  bottom: 100,
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                exit={{
                  bottom: -100,
                }}
              >
                <ColorWrap />
              </motion.div>
            )
          }
        </AnimatePresence>
      </>

      <div
        className=" justify-between items-center flex-row
            
            bottom-[0px]
            left-[0]
            fixed
            w-[100%]
            hidden
            sm:!flex
            bg-[#FFFFFF]
            stroke-[#D7D7D7]
            border-[##1F396E]
           
            z-[50]
            rounded-tr-[20px]
            rounded-tl-[20px]
            p-[0.7rem]
            px-[0.2rem]
            
          "
      >
        <ul
          className="flex justify-between items-center flex-row
             z-[50]
             w-[100%]
             gap-[0.5rem]
             overflow-x-scroll
            "
        >
          {listItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => toggle(item.id)}
                className={`flex justify-between items-center 
                    flex-col
                   py-[0.5rem]
                    px-[0.5rem]
                    ${
                      open === item.id &&
                      "border-[1px] border-solid border-[#1F396E] font-bold"
                    }
                    bg-[#F4F4F4]
                    rounded-[7px]
                    
                    `}
              >
                {item.icon}

                <div
                  className="flex justify-between items-center
              gap-[0.2rem]
              mt-[0.5rem]
              "
                >
                  <span
                    className="text-[#1F396E] text-[1rem] leading-[1rem]
                
                "
                  >
                    {item.name}
                  </span>
                  <span>{item.subName}</span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
