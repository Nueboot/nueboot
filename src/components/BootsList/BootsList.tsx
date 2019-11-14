import React from "react";

import BootService from "../../data/boots";
import { Boot } from "../../types/boots";

export default function BootsList() {
  const collection = BootService.readCache();

  return (
    <div>
      {collection.map((boot: Boot) => (
        <div key={boot.model}>{boot.model}</div>
      ))}
    </div>
  );
}
