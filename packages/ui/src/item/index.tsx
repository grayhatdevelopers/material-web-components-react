import React from "react";

import { MdItem } from "@material/web/labs/item/item";
import { createComponent } from "@lit/react";

export type { MdItem as MdItemType } from "@material/web/labs/item/item";

// const events = {
//   'onOpen': 'open',
//   'onOpened': 'opened',
//   'onClose': 'close',
//   'onClosed': 'closed',
//   'onCancel': 'cancel',
// }

export const Item = createComponent({
  tagName: "md-Item",
  elementClass: MdItem,
  react: React,
  // events: events,
});

export default Item;
