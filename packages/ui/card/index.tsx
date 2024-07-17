"use client"
// file: Fab.react.tsx
import {MdElevatedCard} from '@material/web/labs/card/elevated-card';
import {MdFilledCard} from '@material/web/labs/card/filled-card';
import {MdOutlinedCard} from '@material/web/labs/card/outlined-card';
import React from 'react';
import {createComponent} from '@lit/react';

export type {MdElevatedButton} from '@material/web/button/elevated-button.js';
export type {MdFilledButton} from '@material/web/button/filled-button.js';
export type {MdFilledTonalButton} from '@material/web/button/filled-tonal-button.js';
export type {MdTextButton} from '@material/web/button/text-button';

export const FilledCard = createComponent({
    tagName: 'md-filled-card',
    elementClass: MdElevatedCard,
    react: React,
});
export const ElevatedCard = createComponent({
    tagName: 'md-elevated-card',
    elementClass: MdFilledCard,
    react: React,
});
export const OutlinedCard = createComponent({
    tagName: 'md-outlined-card',
    elementClass: MdOutlinedCard,
    react: React,
});

const Card = (props: any) => {
    if (props.variant === 'md-filled-card') return <FilledCard {...props}>{props.children}</FilledCard>
    if (props.variant === 'md-outlined-card') return <OutlinedCard {...props}>{props.children}</OutlinedCard>
    return <ElevatedCard {...props}>{props.children}</ElevatedCard>
}

export default Card

