import React from "react";

const DropDown = ({ children, onchange, style }) => {
  return (
    <select className={style} onChange={onchange}>
      {children}
    </select>
  );
};

export default DropDown;
