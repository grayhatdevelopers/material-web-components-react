"use client";

import React from "react";

import { MdNavigationBar } from "@material/web/labs/navigationbar/navigation-bar";
import { createComponent } from "@lit/react";

export type { MdNavigationBar as MdNavigationBarType } from "@material/web/labs/navigationbar/navigation-bar";

// const events = {
//   'onOpen': 'open',
//   'onOpened': 'opened',
//   'onClose': 'close',
//   'onClosed': 'closed',
//   'onCancel': 'cancel',
// }

export const NavigationBar = createComponent({
  tagName: "md-navigation-bar",
  elementClass: MdNavigationBar,
  react: React,
  // events: events,
});

export default NavigationBar;
