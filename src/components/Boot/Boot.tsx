import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import BootService from "../../data/boot";
import { Container } from "./Boot.styles";

interface Props {
  bootId: string;
}

export default function Boot({ match }: RouteComponentProps<Props>) {
  const boot = BootService.readCache(match.params.bootId);

  return <Container>{boot.brand}</Container>;
}
