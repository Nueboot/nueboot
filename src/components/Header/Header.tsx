import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/nueboot.svg";
import { Links, Container, LogoContainer } from "./Header.styles";

export default function Header() {
  return (
    <Container>
      <LogoContainer to="/">
        <img src={Logo} />
      </LogoContainer>
      <Links>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/boots">Boots</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>Sign in</li>
      </Links>
    </Container>
  );
}
