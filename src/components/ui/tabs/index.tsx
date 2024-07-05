// File: Tabs.tsx

import React from 'react';
import {
    MdTabs,
} from '@material/web/tabs/tabs';

import {
    MdPrimaryTab,
} from '@material/web/tabs/primary-tab';

import {
    MdSecondaryTab,
} from '@material/web/tabs/secondary-tab';

import { createComponent } from '@lit/react';

export type {
    MdTabs,
} from '@material/web/tabs/tabs';

export type {
    MdPrimaryTab,
} from '@material/web/tabs/primary-tab';

export type {
    MdSecondaryTab,
} from '@material/web/tabs/secondary-tab';

const events = {
    'onChange': 'change',
  }

export const Tabs = createComponent({
    tagName: 'md-tabs',
    elementClass: MdTabs,
    react: React,
    events,
});

export const PrimaryTab = createComponent({
    tagName: 'md-primary-tab',
    elementClass: MdPrimaryTab,
    react: React,
});

export const SecondaryTab = createComponent({
    tagName: 'md-secondary-tab',
    elementClass: MdSecondaryTab,
    react: React,
});

export default Tabs;