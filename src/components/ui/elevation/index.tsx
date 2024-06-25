"use client"
// file: Elevation.react.tsx
import { MdElevation } from '@material/web/elevation/elevation';
import React from 'react';
import { createComponent } from '@lit/react';

export type { MdElevation } from '@material/web/elevation/elevation.js';

export default createComponent({
    tagName: 'md-elevation',
    elementClass: MdElevation,
    react: React,
});
