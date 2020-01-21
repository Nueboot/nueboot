import React, { Suspense } from "react";

import Router from "../Router";
import Header from "../Header";
import GlobalStyles from "./Global.styles";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <Header />
      <Router />
    </Suspense>
  );
}
