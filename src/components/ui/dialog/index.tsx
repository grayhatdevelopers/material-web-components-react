"use client"
// file: Icon.react.tsx
import {MdDialog} from '@material/web/dialog/dialog.js';
import React, { useEffect, useRef } from 'react';
import {createComponent} from '@lit/react';

export type {FabSize, FabVariant} from '@material/web/fab/fab.js';

import type { MdDialog as MdDialogType } from '@material/web/dialog/dialog';
import type { ReactWebComponent } from '@lit/react';

export const DialogInternal = createComponent({
  tagName: 'md-dialog',
  elementClass: MdDialog,
  react: React,
  events: {
    onClosed: "closed"
  }
});


const Dialog = (props: any) => {
  return (
    <DialogInternal {...props}>{props.children}</DialogInternal>
  )
}

export default Dialog;