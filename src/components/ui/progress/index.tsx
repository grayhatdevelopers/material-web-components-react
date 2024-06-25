// File: ProgressIndicators.tsx

import React from 'react';
import {
    MdLinearProgress,
} from '@material/web/progress/linear-progress';

import {
    MdCircularProgress,
} from '@material/web/progress/circular-progress';


import { createComponent } from '@lit/react';

// Create React components for each Material Web progress component
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

// Wrapper component that determines which progress indicator to render based on props
const Progress = (props: {
  type: 'circular' | 'linear';
  variant?: 'default' | 'four-color';
  value?: number;
  buffer?: number;
  indeterminate?: boolean;
  ariaLabel?: string;
}) => {
  const { type, variant = 'default', ...rest } = props;

  if (type === 'circular') {
    return (
      <CircularProgress
        {...rest}
        indeterminate={props.indeterminate}
        value={props.value}
        aria-label={props.ariaLabel}
        className={variant === 'four-color' ? 'four-color' : ''}
      />
    );
  } else if (type === 'linear') {
    return (
      <LinearProgress
        {...rest}
        indeterminate={props.indeterminate}
        value={props.value}
        buffer={props.buffer}
        aria-label={props.ariaLabel}
        className={variant === 'four-color' ? 'four-color' : ''}
      />
    );
  } else {
    return null; // Handle unsupported types here if needed
  }
};

export default Progress;
