import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./simplyComponent";
import { Img } from "./simplyComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloWorld />
    <Img />
  </div>
);



