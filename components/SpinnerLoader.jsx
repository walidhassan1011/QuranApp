"use client";

import React from "react";

import { Spinner } from "flowbite-react";
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
          stroke-width="5"
        ></circle>
      </svg>
    </>
  );
};

export default SpinnerLoader;