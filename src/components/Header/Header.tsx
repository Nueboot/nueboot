import * as React from "react";

import { Links } from "./Header.styles";
import Logo from "../../assets/nueboot.svg";

function Header() {
  return (
    <div>
      <a href="/">
        <img src={Logo} />
      </a>
      <Links>
        <li>
          <a href="/boots">Boots</a>
        </li>
      </Links>
    </div>
  );
}

export default Header;
