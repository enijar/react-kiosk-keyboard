import React from "react";
import { render } from "react-dom";
import Basic from "./examples/basic";
import Custom from "./examples/custom";

render(
  <React.StrictMode>
    <h2>Basic</h2>
    <Basic />

    <h2>Custom</h2>
    <Custom />
  </React.StrictMode>,
  document.querySelector("#root")
);
