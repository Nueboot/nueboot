import * as React from "react";
import { Link } from "react-router-dom";

import { Links } from "./Header.styles";
import Logo from "../../assets/nueboot.svg";

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
