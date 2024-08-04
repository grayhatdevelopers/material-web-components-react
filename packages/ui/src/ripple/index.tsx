// File: Ripple.tsx

import React from "react";
import { MdRipple } from "@material/web/ripple/ripple";
import { createComponent } from "@lit/react";

export type { MdRipple } from "@material/web/ripple/ripple";

export default createComponent({
  tagName: "md-ripple",
  elementClass: MdRipple,
  react: React,
});
