// file: Icon.react.tsx
import { MdSwitch } from "@material/web/switch/switch";
import React from "react";
import { createComponent } from "@lit/react";

export type { FabSize, FabVariant } from "@material/web/fab/fab.js";

const events = {
  onInput: "input",
  onChange: "change",
};

export default createComponent({
  tagName: "md-switch",
  elementClass: MdSwitch,
  react: React,
  events,
});
