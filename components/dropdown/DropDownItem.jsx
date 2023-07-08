import React from "react";

const DropDownItem = ({ list, children, onclick }) => {
  return (
    <>
      <option value={children}>{children}</option>;
    </>
  );
};

export default DropDownItem;
