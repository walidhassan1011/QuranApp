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
import translationlang from "@/constants/translation";
const{translation} = useStore

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
      arabicName: translationlang.ar.surah,
      subName: "",
      icon: <BsBook className="text-black text-[1.4rem] leading-[1.9rem]" />,
    },
    {
      id: 2,
      name: "Text",
      arabicName: translationlang.ar.textSize,
      subName: "Size",
      icon: (
        <RxLetterCaseCapitalize
          className="text-black text-[1.4rem] leading-[1.9rem]
                      font-bold
                  "
        />
      ),
    },
    {
      id: 3,
      name: "Text",
      subName: "Color",
      arabicName: translationlang.ar.colornoal,
      arabicSubName: translationlang.ar.text,
      icon: (
        <div
          className={`w-[30px]
                border-[1px] border-solid border-black
              h-[30px] rounded-[5px] `}
          style={{ backgroundColor: colors.color }}
        />
      ),
    },
    {
      id: 4,
      name: "Background",
      subName: "",
      arabicName: translationlang.ar.colornoal,
      arabicSubName: translationlang.ar.background,
      icon: (
        <div
          className="w-[30px]
              h-[30px] rounded-[5px] 
              border-[1px] border-solid border-black
              "
          style={{ backgroundColor: colors.background }}
        />
      ),
    },
    {
      id: 5,
      name: "Assets",
      subName: "",
      arabicName: translationlang.ar.colornoal,
      arabicSubName: translationlang.ar.assets,
      icon: (
        <div
          className="w-[30px]
          border-[1px] border-solid border-black
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
          {listItems.slice(2, 5).map((item, index) => {
            return (
              open === item.id && (
                <motion.div
                key={index}
                  className=" justify-between items-center 
      flex-col
      w-[100%]
   
      
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
                  <ColorWrap color={item.name.toLowerCase()} />
                </motion.div>
              )
            );
          })}
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
            border-black
           
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
             pb-[0.5rem]
            "
        >
          {listItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  toggle(item.id);
                }}
                className={`flex justify-between items-center 
                    flex-col
                   py-[0.5rem]
                    px-[0.5rem]
                    h-[4.5rem]
                    
                    ${
                      open === item.id &&
                      "border-[1px] border-solid border-black font-bold"
                    }
                    bg-[#f7f7f7]
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
                    className="text-black text-[1rem] leading-[1rem]
                
                "
                  >
                    {translation === "English" ?item.name: item.arabicName }
                  </span>
                  <span className="text-black text-[1rem] leading-[1rem]">
                    {translation ===  "English"?item.subName: item.arabicSubName}
                  </span>
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
