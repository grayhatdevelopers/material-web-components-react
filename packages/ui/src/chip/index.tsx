// file: Icon.react.tsx
import { MdChipSet } from "@material/web/chips/chip-set";
import { MdAssistChip } from "@material/web/chips/assist-chip";
import { MdFilterChip } from "@material/web/chips/filter-chip";
import { MdInputChip } from "@material/web/chips/input-chip";
import { MdSuggestionChip } from "@material/web/chips/suggestion-chip";

import React from "react";
import { createComponent } from "@lit/react";
import { matchVariant } from "../utils";

export type { FabSize, FabVariant } from "@material/web/fab/fab.js";

const events = {
  onUpdateFocus: "update-focus",
};

export const ChipSet = createComponent({
  tagName: "md-chip-set",
  elementClass: MdChipSet,
  react: React,
});

export const AssistChip = createComponent({
  tagName: "md-assist-chip",
  elementClass: MdAssistChip,
  react: React,
  events,
});
export const FilterChip = createComponent({
  tagName: "md-filter-chip",
  elementClass: MdFilterChip,
  react: React,
  events: {
    ...events,
    onRemove: "remove",
  },
});
export const InputChip = createComponent({
  tagName: "md-input-chip",
  elementClass: MdInputChip,
  react: React,
  events: {
    ...events,
    onRemove: "remove",
  },
});
export const SuggestionChip = createComponent({
  tagName: "md-suggestion-chip",
  elementClass: MdSuggestionChip,
  react: React,
  events,
});

const Chip = (props: any) => {
  if (matchVariant(props.variant, "md-filter-chip"))
    return <FilterChip {...props}>{props.children}</FilterChip>;
  if (matchVariant(props.variant, "md-input-chip"))
    return <InputChip {...props}>{props.children}</InputChip>;
  if (matchVariant(props.variant, "md-suggestion-chip"))
    return <SuggestionChip {...props}>{props.children}</SuggestionChip>;
  return <AssistChip {...props}>{props.children}</AssistChip>;
};

export default Chip;
