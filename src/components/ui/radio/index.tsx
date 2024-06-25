// File: RadioButtons.tsx

import React from 'react';
import { MdRadio } from '@material/web/radio/radio';

import { createComponent } from '@lit/react';

export type { MdRadio } from '@material/web/radio/radio.js';

// Create React component for Material Web radio button
export default createComponent({
  tagName: 'md-radio',
  elementClass: MdRadio,
  react: React,
});