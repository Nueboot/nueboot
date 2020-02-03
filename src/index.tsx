import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "typeface-heebo";

const HotApp = hot(App);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<HotApp />);
