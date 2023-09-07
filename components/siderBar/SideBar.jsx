"use client";

import React, { useState } from "react";
import SurahPart from "./SurahPart";
import AyatPart from "./AyatPart";
import TranslationPart from "./TranslationPart";
import TextSize from "./TextSize";

import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

import Customize from "./Customize";
import { useStore } from "@/context/Store";
import { lang } from "@/constants/lang";
import translationlang from "@/constants/translation";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
/********************************** */
const colorTitle = ["color", "background", "assets"];
const SideBar = () => {
  const [show, setShow] = useState(true);
  const {
    translation,
    setSurahName,
    setAyaNumber,
    setColors,
    surahName,
    ayaNumber,
    colors,
  } = useStore();
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <div
            className="
              sm:hidden
            "
          >
            <motion.div
              className="flex  justify-between items-center
    min-h-[88vh]
    w-[302px]
   relative
  
   
   sm:hidden
   
          z-50
    
    px-2
    "
              initial={{
                x: `
              ${translation === "English" ? "-100%" : "100%"}
            `,
              }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              exit={{
                x: `
              ${translation === "English" ? "-100%" : "100%"}
            `,
                transition: { duration: 0.5, ease: easeOut },
              }}
            >
              <motion.div
                className="flex justify-center items-start
            flex-col
            min-h-full
            w-[302px]
            p-[10px]
            sm:hidden
            bg-white
            rounded-[10px]

        "
                initial={{
                  x: `
              ${translation === "English" ? "-100%" : "100%"}
              `,
                }}
                exit={{
                  x: `
                  ${translation === "English" ? "-100%" : "100%"}
                `,
                  transition: { duration: 0.5, ease: easeOut },
                }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <div
                  className="flex justify-end items-center w-[100%]  
        mb-2
        sm:hidden
        "
                >
                  {translation === "English" ? (
                    <AiOutlineArrowLeft
                      className="text-[#000000]
          font-bold
          text-2xl
          cursor-pointer
          "
                      onClick={() => setShow(false)}
                    />
                  ) : (
                    <AiOutlineArrowRight
                      className="text-[#000000]
            font-bold
            text-2xl
            cursor-pointer
            "
                      onClick={() => setShow(false)}
                    />
                  )}
                </div>
                <h1
                  className="text-[#000000]
            font-bold
          "
                >
                  {translation === "English"
                    ? translationlang.en.surah
                    : translationlang.ar.surah}
                </h1>
                <SurahPart />
                <AyatPart />
                <TranslationPart />
                <hr className="w-[100%] h-[1px] bg-[#E5E5E5] my-2" />
                <h1 className="text-[#000000] font-bold">
                  {translation === "English"
                    ? translationlang.en.text
                    : translationlang.ar.text}
                </h1>
                <TextSize />

                {colorTitle.map((title, index) => {
                  return (
                    <>
                      <Customize
                        title={title}
                        key={title}
                        toggle={() => toggle(index)}
                        open={open === index}
                        setOpen={setOpen}
                      />
                      {index == 0 ? (
                        <>
                          <hr className="w-[100%] h-[1px] bg-[#E5E5E5] my-2" />
                          <h1 className="text-[#000000] font-bold">
                            {translation === "English"
                              ? translationlang.en.effects
                              : translationlang.ar.effects}
                          </h1>
                        </>
                      ) : null}
                    </>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!show && (
          <motion.div
            className={`flex justify-end items-center 
          bg-white
          p-2
        absolute
        top-[50%]
        ${translation === "English" ? "left-[1%]" : "right-[1%]"}
        z-10
        

          rounded-[10px]
          
        `}
          >
            {translation === "English" ? (
              <AiOutlineArrowRight
                className="text-[#000000] 
          font-bold 
          text-2xl
          cursor-pointer

          "
                onClick={() => {
                  // state the state to the previous state
                  setAyaNumber((prev) => prev);
                  setSurahName((prev) => prev);
                  setColors((prev) => prev);

                  setShow(true);
                }}
              />
            ) : (
              <AiOutlineArrowLeft
                className="text-[#000000] 
          font-bold 
          text-2xl
          cursor-pointer

          "
                onClick={() => {
                  // state the state to the previous state
                  setAyaNumber((prev) => prev);
                  setSurahName((prev) => prev);
                  setColors((prev) => prev);

                  setShow(true);
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
