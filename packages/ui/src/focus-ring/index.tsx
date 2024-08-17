// file: FocusRing.react.tsx
import { MdFocusRing } from "@material/web/focus/md-focus-ring";
import React from "react";
import { createComponent } from "@lit/react";

export type { MdFocusRing } from "@material/web/focus/md-focus-ring.js";

const events = {
  onVisibilityChanged: "visibility-changed",
};
export default createComponent({
  tagName: "md-focus-ring",
  elementClass: MdFocusRing,
  react: React,
  events,
});
