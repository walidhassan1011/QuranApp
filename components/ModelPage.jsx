import translationlang from "@/constants/translation";
import { useStore } from "@/context/Store";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import SpinnerLoader from "./SpinnerLoader";

const ModelPage = () => {
  const {
    fetchSurahImage,
    generated,
    setGenerated,
    translation,
    setTranslation,
    surahImage,
    setSurahImage,
    downloadImage,
  } = useStore();

  return (
    <section
      className="fixed top-0 left-0 z-[10000] w-full min-h-screen
    flex justify-center items-center
  overflow-y-auto
    
    "
    >
      <div
        className=" 
          absolute top-0 left-0
        z-[1000] 
          w-[100%]
          min-h-[100%]
        bg-gray-900 
        bg-opacity-50
       flex justify-center items-center
    
      "
      >
        <div
          className="
          flex justify-center items-center
          flex-col
          
         
         
            bg-white 
        rounded-xl
            h-[80%]
            w-[60%]
            sm:w-[90%]
            px-5
            py-2
        "
        >
          <div
            className="
          w-[100%]
            mt-2
            flex justify-end items-center
          "
          >
            <AiOutlineClose
              className="text-black text-3xl cursor-pointer"
              onClick={() => {
                setGenerated(false);
                document.body.style.overflow = "auto";
                setSurahImage("");
              }}
            />
          </div>
          <div
            className="flex justify-center items-center 
            bg-[#F5F5F5]
            w-[100%]    
           min-h-[300px]
     
            mt-5
        
            "
          >
            {surahImage ? (
              <Image
                src={surahImage}
                alt="surah"
                width={500}
                height={500}
                className="
                w-[100%]
                h-[100%]
                "
              />
            ) : (
              <>
                <SpinnerLoader />
              </>
            )}
          </div>
          <div
            className="flex justify-center items-center px-5 py-2
            w-[100%]
            text-center
            mt-5
            
          "
          >
            <button
              className="bg-[black]
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
        
         
        "
              onClick={() => downloadImage()}
            >
              <BiSolidRightArrow
                className={`
              ${translation === "English" ? "mr-2" : "ml-2"}
              sm:m-0
            `}
              />
              <span className="">
                {/* {translation === "English"
                  ? translationlang.en.generate
                  : translationlang.ar.generate} */}
                Download
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelPage;
