import React, { Suspense } from "react";

import BootsList from "../BootsList";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BootsList />
    </Suspense>
  );
}
