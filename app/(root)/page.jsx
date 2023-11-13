import About from "@/components/landingPage/About";
import Footer from "@/components/landingPage/Footer";
import Frame from "@/components/landingPage/Frame";
import Navbar from "@/components/landingPage/Navabar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Frame />
      <About />
      <Footer />
    </div>
  );
};

export default page;
