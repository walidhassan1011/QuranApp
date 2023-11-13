import React from "react";
import Link from "next/link";
const Navabar = () => {
  const navItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "#about",
    },
    {
      id: 3,
      title: "Contact Us",
      url: "#contact",
    },
  ];
  return (
    <nav
      className="
            flex
            justify-center
            items-center
            h-16
            
            bg-black
            text-white
            relative
            shadow-sm
            font-mono
            w-full
        "
    >
      <ul
        className="
                flex
                items-center
                justify-between
                text-base
                
                text-white
                pt-4
                sm:pt-0
            "
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className="
                            hover:text-gray-300
                            px-3
                            py-2
                            rounded-md
                            text-sm
                            font-medium
                           
                            "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navabar;
