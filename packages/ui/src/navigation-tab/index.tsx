import React from "react";

import { MdNavigationTab } from "@material/web/labs/navigationtab/navigation-tab";
import { createComponent } from "@lit/react";

export type { MdNavigationTab as MdNavigationTabType } from "@material/web/labs/navigationtab/navigation-tab";

// const events = {
//   'onOpen': 'open',
//   'onOpened': 'opened',
//   'onClose': 'close',
//   'onClosed': 'closed',
//   'onCancel': 'cancel',
// }

export const NavigationTab = createComponent({
  tagName: "md-navigation-tab",
  elementClass: MdNavigationTab,
  react: React,
  // events: events,
});

export default NavigationTab;
