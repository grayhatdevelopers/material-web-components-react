// File: MaterialMenu.tsx
"use client";

import { MdMenu } from '@material/web/menu/menu';
import { MdMenuItem } from '@material/web/menu/menu-item';
import { MdSubMenu } from '@material/web/menu/sub-menu';

import React from 'react';
import { createComponent } from '@lit/react';

const events = {
  'onOpening': 'opening',
  'onOpened': 'opened',
  'onClosing': 'closing',
  'onClosed': 'closed',
}
export const MenuInternal = createComponent({
  tagName: 'md-menu',
  elementClass: MdMenu,
  react: React,
  events,
});

export const MenuItem = createComponent({
  tagName: 'md-menu-item',
  elementClass: MdMenuItem,
  react: React,
  events: {
    'onCloseMenu': 'close-menu'
  }
});

export const SubMenu = createComponent({
  tagName: 'md-sub-menu',
  elementClass: MdSubMenu,
  react: React,
  events: {
    'onDeactivateItems': 'deactivate-items',
    'onRequestActivation': 'request-activation',
    'onDeactivateTypeahead': 'deactivate-typeahead',
    'onActivateTypeahead': 'activate-typeahead',
  }
});

const Menu = (props: any) => {
  return (
    <MenuInternal {...props}>{props.children}</MenuInternal>
  )
}

export default Menu;
