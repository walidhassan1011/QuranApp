"use client";
import React from "react";
import Surah from "./Surah";
import SideBar from "./siderBar/SideBar";
import { useStore } from "@/context/Store";
import { Lightbox } from "react-modal-image";
import ModelPage from "./ModelPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMess from "./toastMessage/ErrorMess";
const Hero = () => {
  const {
    generated,
    setGenerated,
    surahImage,
    setSurahImage,
    alert,
    setAlert,
    error,
    setError,
  } = useStore();

  return (
    <div
      className="flex justify-center items-center
     min-h-[88.5vh]
    
    bg-[#F5F5F5]
    sm:px-2
    sm:flex-col
    sm:items-center
    lg:min-h-full
    lg:py-6
    overflow-x-hidden
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
      {alert ? (
        <ErrorMess type={"startLessThanEnd"} />
      ) : error ? (
        <ErrorMess type={"somethingWentWrong"} />
      ) : null}
    </div>
  );
};

export default Hero;
