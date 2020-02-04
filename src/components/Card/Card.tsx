import * as React from "react";

import { Boot } from "../../types/boots";
import { Container, Image, Info, Stars, Content, Price } from "./Card.styles";

interface Props {
  readonly brand: Boot["brand"];
  readonly model: Boot["model"];
  readonly className?: string;
}

const Card: React.FC<Props> = ({ brand, model, className }) => {
  return (
    <Container className={className || ""}>
      <Image />
      <Info>
        <Content>
          <h4>{brand}</h4>
          <h4>{model}</h4>
        </Content>
        <Stars>★★★★★ (4 reviews)</Stars>
      </Info>
      <Price>$188</Price>
    </Container>
  );
};

export default Card;
