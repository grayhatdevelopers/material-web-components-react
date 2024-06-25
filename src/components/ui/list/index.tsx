// File: MaterialList.tsx
"use client";

import { MdList } from '@material/web/list/list';
import { MdListItem } from '@material/web/list/list-item';

import React from 'react';
import { createComponent } from '@lit/react';

export const List = createComponent({
  tagName: 'md-list',
  elementClass: MdList,
  react: React,
});

export const ListItem = createComponent({
  tagName: 'md-list-item',
  elementClass: MdListItem,
  react: React,
});

export default List;
