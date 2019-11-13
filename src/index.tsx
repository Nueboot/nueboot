import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/Hello";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Hello name="mickey" />);
