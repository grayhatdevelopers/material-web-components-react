"use client"
// file: Divider.react.tsx
import { MdDivider } from '@material/web/divider/divider';
import React from 'react';
import { createComponent } from '@lit/react';

export type { MdDivider } from '@material/web/divider/divider.js';

export default createComponent({
    tagName: 'md-divider',
    elementClass: MdDivider,
    react: React,
});