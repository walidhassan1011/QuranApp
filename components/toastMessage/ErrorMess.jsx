"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiErrorCircle } from "react-icons/bi";
const ErrorMess = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="
        bg-red-700
        border-4
        border-red-700       
        px-4
        py-1
        rounded-xl
        fixed
        z-[1000]
        bottom-[10px]
        right-[10px]
        sm:bottom-[84%]
        
        sm:right-[10px]
        
        "
        role="alert"
        initial={{
          right: -500,
          opacity: 0,
        }}
        animate={{
          right: 10,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        exit={{
          right: -500,
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
            start aya must be less than end aya
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorMess;
