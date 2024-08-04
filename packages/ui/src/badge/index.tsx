"use client";

import React from "react";

import { MdBadge } from "@material/web/labs/badge/badge";
import { createComponent } from "@lit/react";

export type { MdBadge as MdBadgeType } from "@material/web/labs/badge/badge";

// const events = {
//   'onOpen': 'open',
//   'onOpened': 'opened',
//   'onClose': 'close',
//   'onClosed': 'closed',
//   'onCancel': 'cancel',
// }

export const Badge = createComponent({
  tagName: "md-badge",
  elementClass: MdBadge,
  react: React,
  // events: events,
});

export default Badge;
