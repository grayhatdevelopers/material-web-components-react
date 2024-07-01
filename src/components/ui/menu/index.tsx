// File: MaterialMenu.tsx
"use client";

import { MdMenu } from '@material/web/menu/menu';
import { MdMenuItem } from '@material/web/menu/menu-item';
import { MdSubMenu } from '@material/web/menu/sub-menu';

import React from 'react';
import { createComponent } from '@lit/react';

export const MenuInternal = createComponent({
  tagName: 'md-menu',
  elementClass: MdMenu,
  react: React,
  events: {
    onClosed: "closed"
  }
});

export const MenuItem = createComponent({
  tagName: 'md-menu-item',
  elementClass: MdMenuItem,
  react: React,
});

export const SubMenu = createComponent({
  tagName: 'md-sub-menu',
  elementClass: MdSubMenu,
  react: React,
});

const Menu = (props: any) => {
  return (
    <MenuInternal {...props}>{props.children}</MenuInternal>
  )
}

export default Menu;
