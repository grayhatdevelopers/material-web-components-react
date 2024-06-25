"use client"
// file: IconButton.react.tsx
import { MdIconButton } from '@material/web/iconbutton/icon-button';
import { MdFilledIconButton } from '@material/web/iconbutton/filled-icon-button';
import { MdFilledTonalIconButton } from '@material/web/iconbutton/filled-tonal-icon-button';
import { MdOutlinedIconButton } from '@material/web/iconbutton/outlined-icon-button';
import React from 'react';
import { createComponent } from '@lit/react';

export type { MdIconButton } from '@material/web/iconbutton/icon-button.js';
export type { MdFilledIconButton } from '@material/web/iconbutton/filled-icon-button.js';
export type { MdFilledTonalIconButton } from '@material/web/iconbutton/filled-tonal-icon-button.js';
export type { MdOutlinedIconButton } from '@material/web/iconbutton/outlined-icon-button.js';

export const DefaultIconButton = createComponent({
    tagName: 'md-icon-button',
    elementClass: MdIconButton,
    react: React,
});

export const FilledIconButton = createComponent({
    tagName: 'md-filled-icon-button',
    elementClass: MdFilledIconButton,
    react: React,
});

export const FilledTonalIconButton = createComponent({
    tagName: 'md-filled-tonal-icon-button',
    elementClass: MdFilledTonalIconButton,
    react: React,
});

export const OutlinedIconButton = createComponent({
    tagName: 'md-outlined-icon-button',
    elementClass: MdOutlinedIconButton,
    react: React,
});

const IconButton = (props: any) => {
    if (props.variant === 'md-filled-icon-button') return <FilledIconButton {...props}>{props.children}</FilledIconButton>;
    if (props.variant === 'md-filled-tonal-icon-button') return <FilledTonalIconButton {...props}>{props.children}</FilledTonalIconButton>;
    if (props.variant === 'md-outlined-icon-button') return <OutlinedIconButton {...props}>{props.children}</OutlinedIconButton>;
    return <DefaultIconButton {...props}>{props.children}</DefaultIconButton>;
};

export default IconButton;
