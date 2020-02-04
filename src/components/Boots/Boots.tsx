import React, { useState } from "react";
import { Link } from "react-router-dom";

import BootService from "../../data/boots";
import { Boot } from "../../types/boots";
import Card from "../Card";
import Filter from "../Filter";
import {
  Container,
  CardContainer,
  Heading,
  FilterButton
} from "./Boots.styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remove = (arr: any[], val: any) => arr.filter(a => a != val);

export default function BootsList() {
  const boots = BootService.readCache();
  const collection = Object.values(boots);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState([]);

  const onSelect = (brand: string) => {
    const index = filters.indexOf(brand);

    if (index > -1) {
      const removed = remove(filters, brand);
      setFilters(removed);
    } else {
      const added = [...filters, brand];
      setFilters(added);
    }
  };

  const toggleFilter = () => setFilterOpen(!filterOpen);

  const filteredBoots =
    filters.length > 0
      ? collection.filter(boot => filters.indexOf(boot.brand) > -1)
      : collection;

  return (
    <Container>
      <Heading>
        <h1>Boots</h1>
        <FilterButton onClick={toggleFilter}>Filter</FilterButton>
      </Heading>
      <Filter open={filterOpen} onSelect={onSelect} selected={filters} />
      <CardContainer>
        {filteredBoots.map((boot: Boot, index) => (
          <Link to={`boots/${index}`} key={boot.model}>
            <Card brand={boot.brand} model={boot.model} />
          </Link>
        ))}
      </CardContainer>
    </Container>
  );
}
