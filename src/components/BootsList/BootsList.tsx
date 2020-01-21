import React from "react";
import { Link } from "react-router-dom";

import BootService from "../../data/boots";
import { Boot } from "../../types/boots";

export default function BootsList() {
  const boots = BootService.readCache();
  const collection = Object.values(boots);

  return (
    <div>
      {collection.map((boot: Boot, index) => (
        <div key={boot.model}>
          <Link to={`boots/${index}`}>{boot.model}</Link>
        </div>
      ))}
    </div>
  );
}
