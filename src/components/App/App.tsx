import React, { Suspense } from "react";
import "typeface-heebo";

import Router from "../Router";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
}
