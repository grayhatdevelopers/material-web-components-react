"use client"
// file: Icon.react.tsx
import {MdDialog} from '@material/web/dialog/dialog.js';
import React from 'react';
import {createComponent} from '@lit/react';

export type { ReactWebComponent } from '@lit/react';
export type { MdDialog as MdDialogType } from '@material/web/dialog/dialog';

const events = typeof window === "undefined" ? undefined : {
  'onOpen': 'open',
  'onOpened': 'opened',
  'onClose': 'close',
  'onClosed': 'closed',
  'onCancel': 'cancel',
}

export const Dialog = createComponent({
  tagName: 'md-dialog',
  elementClass: MdDialog,
  react: React,
  // events: events,
});

export default Dialog;