import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropDown = ({ children, onChange, style }) => {
  return (
    <select className={style} onChange={onChange}>
      {children}
    </select>
  );
};

export default DropDown;
