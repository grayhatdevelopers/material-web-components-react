// File: RadioButtons.tsx

import React from "react";
import { MdRadio } from "@material/web/radio/radio";

import { createComponent } from "@lit/react";

export type { MdRadio } from "@material/web/radio/radio.js";

const events = {
  onInput: "input",
  onChange: "change",
};

export default createComponent({
  tagName: "md-radio",
  elementClass: MdRadio,
  react: React,
  events,
});
