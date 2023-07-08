"use client";
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../context/Store";
import images from "@/constants/images";

import Image from "next/image";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
const defaultAya = `
بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِالٓمٓ ١  ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ٢  ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ٣  وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ٤  أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ٥ إِنَّ ٱلَّذِينَ كَفَرُواْ سَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ ٦  خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَعَلَىٰ سَمۡعِهِمۡۖ وَعَلَىٰٓ أَبۡصَٰرِهِمۡ غِشَٰوَةٞۖ وَلَهُمۡ عَذَابٌ عَظِيمٞ ٧ 
`;
const Surah = () => {
  const { surahName, surahBorder, ayat, textSize, colors } = useStore();

  console.log(colors["assets"]);
  return (
    <motion.div
      className="flex flex-col justify-center items-center
    w-[100%]
    
    
   "
    >
      <TransformWrapper
        defaultScale={0.5}
        maxScale={1}
        minScale={0.5}
        zoomAnimation={true}
        defaultPositionX={100}
        defaultPositionY={100}
        maxPositionY={200}
        minPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <TransformComponent
              contentStyle={{
                width: "100%",
                minHeight: "88.5vh",
                textAlign: "center",
                display: "flex",
                padding: "20px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                className={`flex flex-col items-center justify-center
              w-[80%]
            
             min-h-[100%]
              p-5
              rounded-3xl
            
            `}
                style={{
                  background: colors["background"],
                }}
              >
                <div
                  className="flex justify-center items-center w-[100%]  relative
                  mb-2
                "
                >
                  <Image
                    src={surahBorder ? surahBorder : images.ayaBorder}
                    alt="border"
                    className="w-[500px]
          
                

          "
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                      textAlign: "justify",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "30px",
                      top: "50%",
                      fontFamily: "surahName",
                      left: "50%",
                      margin: "2px auto",
                      transform: "translate(-50%,-50%)",
                      position: "absolute",
                      zIndex: "1",
                      color: colors["color"],
                    }}
                  >
                    1
                  </h2>
                </div>
                <h3
                  style={{
                    fontFamily: "basmallah",
                    fontSize: "40px",
                    color: "black",
                  }}
                  className="mb-2 mt-2"
                >
                  ﷽
                </h3>
                <p
                  style={{
                    fontFamily: "UthmanicHafs",
                    fontSize: `${textSize}px`,

                    textAlign: "justify",
                    color: colors["color"],
                    flex: 1,
                  }}
                  dir="rtl"
                >
                  {ayat ? ayat : defaultAya}
                </p>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </motion.div>
  );
};

export default Surah;
