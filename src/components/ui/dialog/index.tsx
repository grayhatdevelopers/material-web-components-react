"use client"
// file: Icon.react.tsx
import {MdDialog} from '@material/web/dialog/dialog.js';
import React, { useEffect, useRef } from 'react';
import {createComponent} from '@lit/react';

export type {FabSize, FabVariant} from '@material/web/fab/fab.js';

import type { MdDialog as MdDialogType } from '@material/web/dialog/dialog';
import type { ReactWebComponent } from '@lit/react';

const events = {
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
  events,
});

export default Dialog;