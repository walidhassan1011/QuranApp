import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import {
  BsInstagram,
  BsFillTelephoneFill,
  BsTwitter,
  BsTiktok,
} from "react-icons/bs";
import Link from "next/link";
const items = [
  {
    id: 1,
    name: "Email",
    icon: <BiLogoGmail />,
    link: "mailto:ofislamco@gmail.com",
  },
  {
    id: 2,
    name: "Phone",
    icon: <BsFillTelephoneFill />,
    link: "tel:+201001234567",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <BsTwitter />,
    link: "https://twitter.com/ofislamco",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <BsInstagram />,
    link: "https://instagram.com/muslimofislam",
  },
  {
    id: 5,
    name: "Tiktok",
    icon: <BsTiktok />,
    link: "https://vm.tiktok.com/muslimsco",
  },
];
const Footer = () => {
  return (
    <footer
      className="
    w-full
  
    mt-10
    bg-[black]
    shadow-md
    shadow-[#00000080]
    text-white
    flex
    flex-col
    px-5
    py-10
    items-start"
      id="contact"
    >
      <h1
        className="
      text-4xl
      font-bold
      mb-5
    
        "
      >
        Contact us
      </h1>
      <div
        className="
      flex
      justify-between
      items-center
      w-full
      flex-wrap
      sm:flex-nowrap
      sm:flex-col
      
      gap-5
      py-10
        "
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="
        flex
        
        w-[20%]
        py-2
        border-b-2
        hover:border-[#a27a50]
        cursor-pointer
        shadow-md
        shadow-[#0000009a]
        justify-between
        sm:w-full
        "
          >
            <div
              className="
          flex
          items-center
          justify-between
          "
            >
              <span
                className="
          text-2xl
          mr-2
        text-red-500
            "
              >
                {item.icon}
              </span>
              <span
                className="
          text-lg
          font-semibold
          
            "
              >
                {item.name}
              </span>
            </div>
            <span
              className="
          text-2xl
          ml-2

            "
            >
              <FiArrowUpRight />
            </span>
          </Link>
        ))}
      </div>
      <div
        className="
      flex
      justify-center
      items-center
      w-full
        "
      >
        <p
          className="
      text-lg
      font-semibold
        "
        >
          © 2021 Muslim Of Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
