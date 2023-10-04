"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiErrorCircle } from "react-icons/bi";
import { useStore } from "@/context/Store";
import translationlang from "@/constants/translation";
const ErrorMess = () => {
  const { translation } = useStore();
  return (
    <AnimatePresence>
      <motion.div
        className={`
        bg-red-700
        border-4
        border-red-700       
        px-4
        py-1
        rounded-xl
        fixed
        z-[1000]
        bottom-[10px]
        ${translation === "English" ? "right-[10px]" : "left-[10px]"}
        sm:bottom-[84%]
        
        sm:${translation === "English" ? "right-[10px]" : "left-[10px]"}
        
        `}
        role="alert"
        initial={{
          x: `${translation === "English" ? "500px" : "-500px"}`,
          opacity: 0,
        }}
        animate={{
          x: `${translation === "English" ? "0px" : "0px"}`,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        exit={{
          x: `${translation === "English" ? "500px" : "-500px"}`,
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <div
          className="
        flex
        items-center
        "
        >
          <BiErrorCircle className="text-white text-2xl" />
          <span
            className="
       
       text-white
        px-4
        py-1
        rounded-md
        text-sm
        font-medium
    capitalize
        "
          >
            {translation === "English"
              ? translationlang.en.errorMessage
              : translationlang.ar.errorMessage}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorMess;
