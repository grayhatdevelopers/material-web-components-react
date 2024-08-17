// file: Icon.react.tsx
import { MdIcon } from "@material/web/icon/icon.js";
import React from "react";
import { createComponent } from "@lit/react";

export type { FabSize, FabVariant } from "@material/web/fab/fab.js";

export default createComponent({
  tagName: "md-icon",
  elementClass: MdIcon,
  react: React,
  events: {
    onClick: "click",
  },
});
