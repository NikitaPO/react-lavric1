import React from "react";
import { observer, inject } from "mobx-react";

export default function withStore(Component) {
  return inject("stores")(observer(Component));
}
