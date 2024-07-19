// File: Select.tsx

import React from 'react';
import {
    MdFilledSelect,
} from '@material/web/select/filled-select';
import {
    MdOutlinedSelect,
} from '@material/web/select/outlined-select';
import {
    MdSelectOption,
} from '@material/web/select/select-option';
import { createComponent } from '@lit/react';
import { matchVariant } from '../utils';

export type {
    MdFilledSelect,
} from '@material/web/select/filled-select';

export type {
    MdOutlinedSelect,
} from '@material/web/select/outlined-select';
export type {
    MdSelectOption
} from '@material/web/select/select-option';

const events = {
    'onChange': 'change',
    'onInput': 'input',
    'onOpening': 'opening',
    'onOpened': 'opened',
    'onClosing': 'closing',
    'onClosed': 'closed',
  }

export const FilledSelect = createComponent({
    tagName: 'md-filled-select',
    elementClass: MdFilledSelect,
    react: React,
    events,
});

export const OutlinedSelect = createComponent({
    tagName: 'md-outlined-select',
    elementClass: MdOutlinedSelect,
    react: React,
    events,
});

const Select = (props: any) => {
    if (matchVariant(props.variant, 'md-filled-select')) return <FilledSelect {...props}>{props.children}</FilledSelect>
    return <OutlinedSelect {...props}>{props.children}</OutlinedSelect>
}

export default Select;

export const SelectOption = createComponent({
    tagName: 'md-select-option',
    elementClass: MdSelectOption,
    react: React,
    events: {
        'onCloseMenu': 'close-menu',
        'onRequestSelection': 'request-selection',
        'onRequestDeselection': 'request-deselection',
    }
});
