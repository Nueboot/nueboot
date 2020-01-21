import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import BootService from "../../data/boot";

interface Props {
  bootId: string;
}

export default function Boot({ match }: RouteComponentProps<Props>) {
  const boot = BootService.readCache(match.params.bootId);

  return <div>{boot.brand}</div>;
}
