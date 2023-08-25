"use client";
import Hero from "@/components/Hero";
import MenuBar from "@/components/menuBar/MenuBar";
import Navbar from "@/components/Navbar";

import { useStore } from "@/context/Store";
import "@/styles/fonts.css";
export default function Home() {
  const { translation } = useStore();

  return (
    <div dir={translation === "Arabic" ? "rtl" : "ltr"}>
      <Navbar />
      <Hero />
      <MenuBar />
    </div>
  );
}
