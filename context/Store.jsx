"use client";

import API from "@/api/api";
import { versesInArabic } from "@/constants/ayatNumbers";
import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [surahName, setSurahName] = useState("الفاتحة");
  const [ayaNumber, setAyaNumber] = useState({
    start: 1,
    end: 1,
  });
  const [imgHtml, setImgHtml] = useState(" ");

  const [translation, setTranslation] = useState("English");
  const [useTranslation, setUseTranslation] = useState(false);
  const [ayatTranslation, setAyatTranslation] = useState([]);
  const [alert, setAlert] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [surahImage, setSurahImage] = useState("");
  const [surahBorder, setSurahBorder] = useState("");
  const [ayat, setAyat] = useState([]);
  const [colors, setColors] = useState({
    background: "#000000",
    color: "#ffffff",
    assets: "#a27a50",
  });

  const [textSize, setTextSize] = useState(50);
  /***************************************************** */

  useEffect(() => {
    const fetchSurahImage = async () => {
      const res = await API.get("/getHTML");
      const data = res.data;

      setImgHtml(data);
    };
    fetchSurahImage();
  }, []);
  /***************************************************** */

  useEffect(() => {
    const getTranslation = async () => {
      if (!useTranslation) {
        setAyatTranslation([]);
        return;
      }
      const { id } = versesInArabic?.find(
        (item) => item?.surahName === surahName
      );

      const res = await API.get("/getTranslation", {
        params: {
          surah: id,
          start: ayaNumber.start,
          end: ayaNumber.end,
        },
      });
      const data = res.data;

      setAyatTranslation(data);
    };
    getTranslation();
  }, [useTranslation, surahName, ayaNumber]);

  /*****************************************************/
  useEffect(() => {
    const fetchAayat = async () => {
      try {
        if (surahName == "" || ayaNumber.end == "" || ayaNumber.start == "") {
          return;
        }

        // if (ayaNumber.start > ayaNumber.end) {
        //   setAyaNumber({ start: 1, end: 1 });
        //   console.log("start is greater than end");
        //   return;
        // }
        if (ayaNumber.start === null || ayaNumber.end === null) {
          return;
        }

        const { id } = versesInArabic?.find(
          (item) => item?.surahName === surahName
        );

        const res = await API.get("/getTextHTML", {
          params: {
            surah: id,
            start: ayaNumber.start,
            end: ayaNumber.end,
          },
        });

        const data = res.data;

        setAyat(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAayat();
  }, [surahName, ayaNumber]);
  /****************************** */
  useEffect(() => {
    const fetchSurahBorder = async () => {
      try {
        const res = await API.get("/getsurahborder", {
          params: {
            color: colors.assets,
          },
          responseType: "blob",
        });
        const data = URL.createObjectURL(res.data);

        setSurahBorder(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurahBorder();
  }, [colors.assets]);

  /************************************************* */

  /************************************************* */
  useEffect(() => {
    localStorage.setItem("lang", translation);
    setTranslation(localStorage.getItem("lang"));
  }, [translation]);
  /************************************************* */
  const fetchSurahImage = async () => {
    try {
      if (surahName === "") {
        return;
      }

      const { id } = versesInArabic?.find(
        (item) => item.surahName === surahName
      );

      if (id == undefined) {
        return;
      }
      setGenerated(true);
      const res = await API.get("/generate", {
        params: {
          surah: id,
          start: ayaNumber.start,
          end: ayaNumber.end,
          bgColor: colors.background,
          textColor: colors.color,
          assColor: colors.assets,
          width: 1024,
          fontSize: textSize,
          translation: useTranslation ? 1 : 0,
        },

        responseType: "blob",
      });

      // react code

      const data = URL.createObjectURL(res.data);
      let img = new Image();
      img.src = data;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        setSurahImage(dataURL);
      };
    } catch (error) {
      console.log(error);
    }
  };
  /***************************************************************** */
  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = surahImage;
    a.download = `${surahName} ${ayaNumber.start}-${ayaNumber.end}.png`;
    a.click();
  };
  /********************************************** */
  return (
    <StoreContext.Provider
      value={{
        surahName,
        setSurahName,
        ayaNumber,
        setAyaNumber,
        colors,
        setColors,
        textSize,
        setTextSize,
        surahImage,
        setSurahImage,
        ayat,
        ayatTranslation,
        useTranslation,
        setUseTranslation,
        downloadImage,
        imgHtml,
        setImgHtml,
        fetchSurahImage,
        setAyat,
        generated,
        setGenerated,
        surahBorder,
        translation,
        setTranslation,
        setSurahBorder,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
