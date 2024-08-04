"use client";

import React from "react";

import { MdNavigationRail } from "./web-component/navigation-rail";

import { createComponent } from "@lit/react";

const events = {
  onOpen: "open",
  onOpened: "opened",
  onClose: "close",
  onClosed: "closed",
  onCancel: "cancel",
  // 'onNavigationDrawerChanged': 'navigation-drawer-changed'
};

export const NavigationRail = createComponent({
  tagName: "md-navigation-rail",
  elementClass: MdNavigationRail,
  react: React,
  events: events,
});

export default NavigationRail;
