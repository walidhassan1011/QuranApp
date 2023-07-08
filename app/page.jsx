"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useStore } from "@/context/Store";
import "@/styles/fonts.css";
export default function Home() {
  const { translation } = useStore();
  console.log(translation);
  return (
    <div dir={translation === "Arabic" ? "rtl" : "ltr"}>
      <Navbar />
      <Hero />
    </div>
  );
}
