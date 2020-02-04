import * as React from "react";

import { BRANDS, MODELS } from "../../data/constants";
import { Container, Content } from "./Footer.styles";

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <h4>Brands</h4>
          <ul>
            {BRANDS.map(brand => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Models</h4>
          <ul>
            {MODELS.map(model => (
              <li key={model}>{model}</li>
            ))}
          </ul>
        </div>
        <div></div>
      </Content>
    </Container>
  );
}
