// File: ProgressIndicators.tsx

import React from 'react';
import {
    MdLinearProgress,
} from '@material/web/progress/linear-progress';

import {
    MdCircularProgress,
} from '@material/web/progress/circular-progress';


import { createComponent } from '@lit/react';

export const CircularProgress = createComponent({
  tagName: 'md-circular-progress',
  elementClass: MdCircularProgress,
  react: React,
});

export const LinearProgress = createComponent({
  tagName: 'md-linear-progress',
  elementClass: MdLinearProgress,
  react: React,
});

const Progress = (props: {
  variant?: 'md-circular-progress' | 'md-linear-progress';
  children?: any;
}) => {
  if (props.variant === 'md-linear-progress') return <LinearProgress {...props}>{props.children}</LinearProgress>;
  return <CircularProgress {...props}>{props.children}</CircularProgress>;
};

export default Progress;
