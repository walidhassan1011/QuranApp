"use client";

import React from "react";

const SpinnerLoader = () => {
  return (
    <>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth={"5px"}
        ></circle>
      </svg>
    </>
  );
};

export default SpinnerLoader;
