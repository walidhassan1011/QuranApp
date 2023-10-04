import React from "react";

const DropDownItem = ({ list, children, onclick, value }) => {
  return (
    <>
      <option onChange={onclick} value={value}>
        {children}
      </option>
      ;
    </>
  );
};

export default DropDownItem;
