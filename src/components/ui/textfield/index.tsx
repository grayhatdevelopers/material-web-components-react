"use client";
// file: TextField.react.tsx
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import React from 'react';
import { createComponent } from '@lit/react';

export type { MdFilledTextField } from '@material/web/textfield/filled-text-field.js';
export type { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';

const events = {
  'onSelect': 'select',
  'onChange': 'change',
  'onInput': 'input',
}

export const FilledTextField = createComponent({
  tagName: 'md-filled-text-field',
  elementClass: MdFilledTextField,
  react: React,
  events,
});

export const OutlinedTextField = createComponent({
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField,
  react: React,
  events,
});

const TextField = (props: any) => {
  if (props.variant === 'md-filled-text-field')
    return <FilledTextField {...props}>{props.children}</FilledTextField>;
  return <OutlinedTextField {...props}>{props.children}</OutlinedTextField>;
};

export default TextField;
