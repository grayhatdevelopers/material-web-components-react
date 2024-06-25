"use client"
// file: Checkbox.react.tsx
import { MdCheckbox } from '@material/web/checkbox/checkbox';
import React from 'react';
import { createComponent } from '@lit/react';

export type { MdCheckbox } from '@material/web/checkbox/checkbox.js';

export default createComponent({
    tagName: 'md-checkbox',
    elementClass: MdCheckbox,
    react: React,
});