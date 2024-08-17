import React from "react";

import { MdNavigationDrawer } from "@material/web/labs/navigationdrawer/navigation-drawer";
import { MdNavigationDrawerModal } from "@material/web/labs/navigationdrawer/navigation-drawer-modal";

import { createComponent } from "@lit/react";

export type { MdNavigationDrawer as MdNavigationDrawerType } from "@material/web/labs/navigationdrawer/navigation-drawer";

const events = {
  onOpen: "open",
  onOpened: "opened",
  onClose: "close",
  onClosed: "closed",
  onCancel: "cancel",
  onNavigationDrawerChanged: "navigation-drawer-changed",
};

export const NavigationDrawer = createComponent({
  tagName: "md-navigation-drawer",
  elementClass: MdNavigationDrawer,
  react: React,
  events: events,
});

export const NavigationDrawerModal = createComponent({
  tagName: "md-navigation-drawer-modal",
  elementClass: MdNavigationDrawerModal,
  react: React,
  events: events,
});

export default NavigationDrawer;
