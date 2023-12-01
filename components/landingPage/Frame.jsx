"use client";

import React from "react";
import Image from "next/image";
import fathaImage from "../../assets/fatha.png";
import { FiArrowUpRight } from "react-icons/fi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import generateAyat from "@/constants/generatefunc";
import { useStore } from "@/context/Store";
import { VersesInEnglish, versesInArabic } from "@/constants/ayatNumbers";
const Frame = () => {
  const router = useRouter();
  const { fetchSurahImage, surahName, setSurahName, surahImage } = useStore();
  return (
    <section
      className="
    flex flex-col
    py-10
    items-center
   
    justify-center
    text-white
    relative
    sm:px-10
    "
    >
      {/* photo frame */}
      <div
        className="
        flex flex-col
        justify-center
        items-center
        p-2
        bg-white
        rounded-[10px]
        shadow-2xl
   
       
        
        "
      >
        <Image
          src={surahImage?.length > 0 ? surahImage : fathaImage}
          width={800}
          height={800}
          alt="surah image"
          className="
            rounded-[10px]
            shadow-2xl
            
            "
        />
      </div>
      {/* two buttons on the photo frame */}
      <div
        className="
            
           
            z-50
            gap-10
            flex
            px-20
            py-2
            justify-between
            items-center
            sm:flex-col
            sm:gap-2
            
        "
      >
        <button
          className="
          bg-[#a27a50]
            rounded-[10px]
           
            
            px-5
            w-[200px]
            
            py-4
            text-white
            flex
            
            text-center
            items-center
            justify-center
            
            "
          onClick={() => router.push("/generate")}
        >
          <span
            className="
            text-xl
            mr-2
            "
          >
            try it{" "}
          </span>
          <span
            className="
            text-2xl
            
            "
          >
            <FiArrowUpRight />
          </span>
        </button>

        <button
          className="
            bg-[#a27a50]
            rounded-[10px]
            
            
            px-5
            
            py-4
            text-white
            flex
            text-center
            items-center
            justify-center
            w-[200px]
            
            "
          onClick={() => {
            const surah = generateAyat();
            const engId = VersesInEnglish.find((item) => {
              if (item.surahName === surah) {
                return item.id;
              }
            });
            const arabicName = versesInArabic.find((item) => {
              if (item.id === engId.id) {
                return item.surahName;
              }
            });
            setSurahName(arabicName.surahName);
            fetchSurahImage();
          }}
        >
          <span
            className="
            text-xl
              
            "
          >
            Generate
          </span>
          <span
            className="
            text-2xl
            ml-2
            "
          >
            <BiSolidRightArrow />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Frame;
