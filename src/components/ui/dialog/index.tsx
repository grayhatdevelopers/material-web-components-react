"use client"
// file: Icon.react.tsx
import {MdDialog} from '@material/web/dialog/dialog.js';
import React from 'react';
import {createComponent} from '@lit/react';

export type {FabSize, FabVariant} from '@material/web/fab/fab.js';

export default createComponent({
  tagName: 'md-dialog',
  elementClass: MdDialog,
  react: React,
});