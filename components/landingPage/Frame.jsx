"use client";

import React from "react";
import Image from "next/image";
import fathaImage from "../../assets/fatha.png";
import { FiArrowUpRight } from "react-icons/fi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
const Frame = () => {
  const router = useRouter();
  return (
    <section
      className="
    flex flex-col
    py-10
    items-center
   h-screen
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
          src={fathaImage}
          width={800}
          height={800}
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
            shadow-2xl
            shadow-black
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
            shadow-2xl
            shadow-black
            
            px-5
            
            py-4
            text-white
            flex
            text-center
            items-center
            justify-center
            w-[200px]
            
            "
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
