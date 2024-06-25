"use client"
// file: Fab.react.tsx
import {MdElevatedButton} from '@material/web/button/elevated-button';
import {MdFilledButton} from '@material/web/button/filled-button';
import {MdFilledTonalButton} from '@material/web/button/filled-tonal-button';
import {MdOutlinedButton} from '@material/web/button/outlined-button';
import React from 'react';
import {createComponent} from '@lit/react';

export type {MdElevatedButton} from '@material/web/button/elevated-button.js';
export type {MdFilledButton} from '@material/web/button/filled-button.js';
export type {MdFilledTonalButton} from '@material/web/button/filled-tonal-button.js';
export type {MdOutlinedButton} from '@material/web/button/outlined-button.js';

export const FilledButton = createComponent({
    tagName: 'md-filled-button',
    elementClass: MdFilledButton,
    react: React,
});
export const FilledTonalButton = createComponent({
    tagName: 'md-filled-tonal-button',
    elementClass: MdFilledTonalButton,
    react: React,
});
export const ElevatedButton = createComponent({
    tagName: 'md-elevated-button',
    elementClass: MdElevatedButton,
    react: React,
});
export const OutlinedButton = createComponent({
    tagName: 'md-outlined-button',
    elementClass: MdOutlinedButton,
    react: React,
});

const Button = (props: any) => {
    if (props.variant === 'md-filled-button') return <FilledButton {...props}>{props.children}</FilledButton>
    if (props.variant === 'md-filled-tonal-button') return <FilledTonalButton {...props}>{props.children}</FilledTonalButton>
    if (props.variant === 'md-outlined-button') return <OutlinedButton {...props}>{props.children}</OutlinedButton>
    return <ElevatedButton {...props}>{props.children}</ElevatedButton>
}

export default Button

