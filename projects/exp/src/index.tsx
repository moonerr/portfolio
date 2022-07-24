import React from "react";

export const Header = ({ text = "" }) => {
  return <h1>Shared header library {text}</h1>;
};

export * from "./canvas";
