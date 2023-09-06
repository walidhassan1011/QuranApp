"use client";
import React from "react";
import Surah from "./Surah";
import SideBar from "./siderBar/SideBar";
import { useStore } from "@/context/Store";
import { Lightbox } from "react-modal-image";
import ModelPage from "./ModelPage";
const Hero = () => {
  const { generated, setGenerated, surahImage, setSurahImage } = useStore();

  return (
    <div
      className="flex justify-around items-start
     min-h-[88.5vh]
      px-[15px]
    bg-[#F5F5F5]
    sm:px-2
    sm:flex-col
    sm:items-center
    lg:min-h-full
    lg:py-6
    
    "
    >
      <SideBar />
      <Surah />
      {generated && (
        // <Lightbox
        //   medium={surahImage}
        //   large={surahImage}
        //   onClose={() => setGenerated(false)}
        // />

        <ModelPage />
      )}
    </div>
  );
};

export default Hero;
