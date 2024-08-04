"use client";
// file: Fab.react.tsx
import { MdElevatedCard } from "@material/web/labs/card/elevated-card";
import { MdFilledCard } from "@material/web/labs/card/filled-card";
import { MdOutlinedCard } from "@material/web/labs/card/outlined-card";
import React from "react";
import { createComponent } from "@lit/react";
import { matchVariant } from "../utils";

export type { MdElevatedCard } from "@material/web/labs/card/elevated-card.js";
export type { MdFilledCard } from "@material/web/labs/card/filled-card.js";
export type { MdOutlinedCard } from "@material/web/labs/card/outlined-card.js";

export const FilledCard = createComponent({
  tagName: "md-filled-card",
  elementClass: MdElevatedCard,
  react: React,
});
export const ElevatedCard = createComponent({
  tagName: "md-elevated-card",
  elementClass: MdFilledCard,
  react: React,
});
export const OutlinedCard = createComponent({
  tagName: "md-outlined-card",
  elementClass: MdOutlinedCard,
  react: React,
});

const Card = (props: any) => {
  if (matchVariant(props.variant, "md-filled-card"))
    return <FilledCard {...props}>{props.children}</FilledCard>;
  if (matchVariant(props.variant, "md-outlined-card"))
    return <OutlinedCard {...props}>{props.children}</OutlinedCard>;
  return <ElevatedCard {...props}>{props.children}</ElevatedCard>;
};

export default Card;
