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
/********************************** */
const colorTitle = ["background", "assets"];
const SideBar = () => {
  const [show, setShow] = useState(true);
  const { translation } = useStore();
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="flex  justify-between items-center
    min-h-[88vh]
    w-[302px]
   relative
  
   
   
          z-50
    
    px-2
    "
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            exit={{ x: "-100%", transition: { duration: 0.5, ease: easeOut } }}
          >
            <motion.div
              className="flex justify-center items-start
            flex-col
            min-h-full
            w-[302px]
            p-[10px]

            bg-white
            rounded-[10px]
        "
              initial={{ x: "-100%" }}
              exit={{
                x: "-100%",
                transition: { duration: 0.5, ease: easeOut },
              }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <div
                className="flex justify-end items-center w-[100%]  
        mb-2
        "
              >
                <BiRightArrowAlt
                  className="text-[#000000]
          font-bold
          text-2xl
          cursor-pointer
          "
                  onClick={() => setShow(false)}
                />
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
              <Customize title={"color"} />
              <hr className="w-[100%] h-[1px] bg-[#E5E5E5] my-2" />
              <h1 className="text-[#000000] font-bold">
                {translation === "English"
                  ? translationlang.en.effects
                  : translationlang.ar.effects}
              </h1>
              {colorTitle.map((title) => {
                return <Customize title={title} key={title} />;
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!show && (
          <motion.div
            className="flex justify-end items-center 
          bg-white
          p-2
        absolute
        top-[50%]
        left-[1%]
        z-10
        

          rounded-[10px]
          
        "
          >
            <BiRightArrowAlt
              className="text-[#000000] 
          font-bold 
          text-2xl
          cursor-pointer

          "
              onClick={() => setShow(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
