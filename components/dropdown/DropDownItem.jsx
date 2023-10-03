import React from "react";

const DropDownItem = ({ list, children, onclick, value }) => {
  return (
    <>
      <option value={value} onChange={onclick}>{children}</option>;
    </>
  );
};

export default DropDownItem;
