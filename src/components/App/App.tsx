import React, { Suspense } from "react";

import Router from "../Router";
import Footer from "../Footer";
import GlobalStyles from "./Global.styles";
import { Container } from "./App.styles";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <Container>
        <Router />
      </Container>
      <Footer />
    </Suspense>
  );
}
