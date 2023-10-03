import React from "react";

const DropDown = ({ children, onchange, style, selection}) => {
  
  return (
    <select value={selection} className={style} onChange={onchange}>
      {children}
    </select>
  );
};

export default DropDown;
