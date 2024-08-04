// File: Slider.tsx

import React from "react";
import { MdSlider } from "@material/web/slider/slider";

import { createComponent } from "@lit/react";

export type { MdSlider } from "@material/web/slider/slider";

const events = {
  onChange: "change",
  onInput: "input",
};

const Slider = createComponent({
  tagName: "md-slider",
  elementClass: MdSlider,
  react: React,
  events,
});
export default Slider;
