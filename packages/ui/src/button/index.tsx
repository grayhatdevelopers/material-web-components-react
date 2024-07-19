"use client"
// file: Fab.react.tsx
import {MdElevatedButton} from '@material/web/button/elevated-button';
import {MdFilledButton} from '@material/web/button/filled-button';
import {MdFilledTonalButton} from '@material/web/button/filled-tonal-button';
import {MdOutlinedButton} from '@material/web/button/outlined-button';
import {MdTextButton} from '@material/web/button/text-button';
import React from 'react';
import {createComponent} from '@lit/react';
import { matchVariant } from '../utils';

export type {MdElevatedButton} from '@material/web/button/elevated-button.js';
export type {MdFilledButton} from '@material/web/button/filled-button.js';
export type {MdFilledTonalButton} from '@material/web/button/filled-tonal-button.js';
export type {MdTextButton} from '@material/web/button/text-button';

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
export const TextButton = createComponent({
    tagName: 'md-text-button',
    elementClass: MdTextButton,
    react: React,
});

const Button = (props: any) => {
    if (matchVariant(props.variant, 'md-filled-button')) return <FilledButton {...props}>{props.children}</FilledButton>
    if (matchVariant(props.variant, 'md-filled-tonal-button')) return <FilledTonalButton {...props}>{props.children}</FilledTonalButton>
    if (matchVariant(props.variant, 'md-outlined-button')) return <OutlinedButton {...props}>{props.children}</OutlinedButton>
    if (matchVariant(props.variant, 'md-text-button')) return <TextButton {...props}>{props.children}</TextButton>
    return <ElevatedButton {...props}>{props.children}</ElevatedButton>
}

export default Button

