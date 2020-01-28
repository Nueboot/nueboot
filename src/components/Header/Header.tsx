import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/nueboot.svg";
import { Links } from "./Header.styles";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <Links>
        <li>
          <Link to="/boots">Boots</Link>
        </li>
      </Links>
    </div>
  );
}
