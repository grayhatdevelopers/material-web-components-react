// File: MaterialMenu.tsx
"use client";

import { MdMenu } from '@material/web/menu/menu';
import { MdMenuItem } from '@material/web/menu/menu-item';
import { MdSubMenu } from '@material/web/menu/sub-menu';

import React from 'react';
import { createComponent } from '@lit/react';

export const Menu = createComponent({
  tagName: 'md-menu',
  elementClass: MdMenu,
  react: React,
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

export default Menu;
