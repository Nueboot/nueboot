import React from "react";

import { BRANDS } from "../../data/constants";
import { FieldSet, Checkboxes } from "./Filter.styles";

interface FilterProps {
  readonly open: boolean;
  readonly selected: string[];
  onSelect(brand: string): void;
}

function Filter({ open, onSelect, selected }: FilterProps) {
  if (!open) return null;

  return (
    <div>
      <FieldSet>
        <legend>Brands</legend>
        <Checkboxes>
          {BRANDS.map(brand => (
            <div key={brand}>
              <input
                type="checkbox"
                value={brand}
                id={brand}
                onChange={() => onSelect(brand)}
                checked={selected.indexOf(brand) > -1}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </Checkboxes>
      </FieldSet>
    </div>
  );
}

export default Filter;
