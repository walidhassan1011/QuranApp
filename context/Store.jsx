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

  const [translation, setTranslation] = useState("English");

  const [alert, setAlert] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [surahImage, setSurahImage] = useState("");
  const [surahBorder, setSurahBorder] = useState("");
  const [ayat, setAyat] = useState([]);
  const [colors, setColors] = useState({
    background: "#c7c7c7",
    color: "#fcb7b7",
    assets: "#000000",
  });
  const [textSize, setTextSize] = useState(16);
  /***************************************************** */
  useEffect(() => {
    const fetchAayat = async () => {
      try {
        if (surahName == "" || ayaNumber.end == "" || ayaNumber.start == "") {
          return;
        }

        const { id } = versesInArabic?.find(
          (item) => item?.surahName === surahName
        );
        const res = await API.get("/getText", {
          params: {
            surah: id,
            start: ayaNumber.start,
            end: ayaNumber.end,
          },
        });
        const res2 = await API.get("/getTextArray", {
          params: {
            surah: id,
            start: ayaNumber.start,
            end: ayaNumber.end,
          },
        });
        console.log(res2.data);
        const data = res.data;
        setAyat(res2.data);
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
      console.log(surahName);

      const { id } = versesInArabic?.find(
        (item) => item.surahName === surahName
      );

      if (id == undefined) {
        return;
      }
      const res = await API.get("/generate", {
        params: {
          surah: id,
          start: ayaNumber.start,
          end: ayaNumber.end,
          bgColor: colors.background,
          textColor: colors.color,
          assColor: colors.assets,
          width: 2000,
          fontSize: textSize,
        },

        responseType: "blob",
      });
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
        setGenerated(true);
      };
    } catch (error) {
      console.log(error);
    }
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
