import React from "react";
import { render } from "react-dom";
import Basic from "./examples/basic";

render(
  <React.StrictMode>
    <Basic />
  </React.StrictMode>,
  document.querySelector("#root")
);
