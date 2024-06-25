// File: Slider.tsx

import React from 'react';
import {
    MdSlider,
} from '@material/web/slider/slider';

import { createComponent } from '@lit/react';

export type {
    MdSlider
} from '@material/web/slider/slider';

const Slider = createComponent({
    tagName: 'md-slider',
    elementClass: MdSlider,
    react: React,
});
export default Slider;