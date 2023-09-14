"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "../context/Store";
import images from "@/constants/images";
import parse from "html-react-parser";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { versesInArabic } from "@/constants/ayatNumbers";
import Loading from "@/app/Loading";
const defaultAya = `
بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِالٓمٓ ١  ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ٢  ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ٣  وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ٤  أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ٥ إِنَّ ٱلَّذِينَ كَفَرُواْ سَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ ٦  خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَعَلَىٰ سَمۡعِهِمۡۖ وَعَلَىٰٓ أَبۡصَٰرِهِمۡ غِشَٰوَةٞۖ وَلَهُمۡ عَذَابٌ عَظِيمٞ ٧ 
`;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: "",
    height: "",
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const Surah = () => {
  const {
    surahName,
    surahBorder,
    ayat,
    textSize,
    colors,
    ayaNumber,
    setImgHtml,
    imgHtml,
    useTranslation,
    ayatTranslation,
  } = useStore();
  const size = useWindowSize();
  const [width, setWidth] = useState(0);

  const elementref = useRef(null);

  useEffect(() => {
    setWidth(elementref.current.offsetWidth);

    console.log(elementref.current.offsetWidth);
  }, [size.width]);

  // find surah number from surah name
  const surahId = versesInArabic.find((item) => {
    if (item.surahName === surahName) {
      return item.id;
    }
  });
  const surahNumber = surahId.id;

  const ayaFont = "UthmanicHafs";
  const surahNameFont = "surahName";
  const bismAllahFont = "basmallah";
  const englishTranslationFont = "OpenSans";

  const translation = useTranslation ? 1 : 0;

  const text = ayat;
  const translationText = ayatTranslation;

  // convert string to html with ${} variables

  const html = eval("`" + imgHtml + "`");

  return (
    <motion.div
      className="flex flex-col justify-center items-center
    w-[100%]
    sm:mt-[50px]
    
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

                textAlign: "center",
                display: "flex",
                padding: "20px",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
              }}
              wrapperStyle={{
                width: "100%",
                height: "100%",
              }}
            >
              {
                <div
                  ref={elementref}
                  className="w-[80%]
                  sm:w-[100%]
                "
                >
                  {parse(html)}
                </div>
              }
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </motion.div>
  );
};

export default Surah;
