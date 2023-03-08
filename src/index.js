import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <h1>Hello World</h1>
    </React.StrictMode>
    <GlobalStyles />
  </>
);
