"use client";
// file: Icon.react.tsx
import { MdOutlinedSegmentedButtonSet } from "@material/web/labs/segmentedbuttonset/outlined-segmented-button-set";
import { MdOutlinedSegmentedButton } from "@material/web/labs/segmentedbutton/outlined-segmented-button";

import React from "react";
import { createComponent } from "@lit/react";

export type { FabSize, FabVariant } from "@material/web/fab/fab.js";

const events = {
  onUpdateFocus: "update-focus",
};

export const SegmentedButtonSet = createComponent({
  tagName: "md-outlined-segmented-button-set",
  elementClass: MdOutlinedSegmentedButtonSet,
  react: React,
});

export const OutlinedSegmentedButton = createComponent({
  tagName: "md-outlined-segmented-button",
  elementClass: MdOutlinedSegmentedButton,
  react: React,
  events,
});
const SegmentedButton = (props: any) => {
  return (
    <OutlinedSegmentedButton {...props}>
      {props.children}
    </OutlinedSegmentedButton>
  );
};

export default SegmentedButton;
