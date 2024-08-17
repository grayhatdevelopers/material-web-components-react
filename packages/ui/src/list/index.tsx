// File: MaterialList.tsx

import { MdList } from "@material/web/list/list";
import { MdListItem } from "@material/web/list/list-item";

import React from "react";
import { createComponent } from "@lit/react";

const events = {
  onRequestActivation: "request-activation",
};
export const List = createComponent({
  tagName: "md-list",
  elementClass: MdList,
  react: React,
});

export const ListItem = createComponent({
  tagName: "md-list-item",
  elementClass: MdListItem,
  react: React,
  events,
});

export default List;
