import React from "react";

const DropDownItem = ({ list, children, onclick, value }) => {
  return (
    <>
      <option value={children}>{children}</option>;
    </>
  );
};

export default DropDownItem;
