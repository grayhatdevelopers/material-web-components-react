"use client"

import React from 'react';

import {MdNavigationDrawer} from '@material/web/labs/navigationdrawer/navigation-drawer';
import {createComponent} from '@lit/react';

export type { MdNavigationDrawer as MdNavigationDrawerType } from '@material/web/labs/navigationdrawer/navigation-drawer';

// const events = {
//   'onOpen': 'open',
//   'onOpened': 'opened',
//   'onClose': 'close',
//   'onClosed': 'closed',
//   'onCancel': 'cancel',
// }

export const NavigationDrawer = createComponent({
  tagName: 'md-navigation-drawer',
  elementClass: MdNavigationDrawer,
  react: React,
  // events: events,
});

export default NavigationDrawer;