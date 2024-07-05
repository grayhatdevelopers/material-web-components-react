"use client"
// file: Fab.react.tsx
import {MdFab} from '@material/web/fab/fab.js';
import {MdBrandedFab} from '@material/web/fab/branded-fab';
import React from 'react';
import {createComponent} from '@lit/react';

export type {FabSize, FabVariant} from '@material/web/fab/fab.js';

export const DefaultFab = createComponent({
  tagName: 'md-fab',
  elementClass: MdFab,
  react: React,
});
export const BrandedFab = createComponent({
  tagName: 'md-text-button',
  elementClass: MdBrandedFab,
  react: React,
});

const Fab = (props: any) => {
  if (props.variant === 'md-branded-fab') return <BrandedFab {...props}>{props.children}</BrandedFab>
  return <DefaultFab {...props}>{props.children}</DefaultFab>
}

export default Fab;