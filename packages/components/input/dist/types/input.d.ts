import React from 'react';
import '../styles/input.style.scss';
declare type Type = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';
declare type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
export interface InputProps {
    /**
     * Enable automatic completion by the browser
     */
    autoComplete?: 'on' | 'off';
    /**
     * Automatically focus the input
     */
    doesAutoFocus?: boolean;
    /**
     * ID for the input
     */
    id?: string;
    /**
     * Choose the keyboard that should be used on mobile devices
     */
    inputMode?: InputMode;
    /**
     * Specify if the input is disabled
     */
    isDisabled?: boolean;
    /**
     * Label for the input
     */
    label: React.ReactNode;
    /**
     * Visually hide the label
     */
    hasHiddenLabel?: boolean;
    /**
     * Mimics the behavior of the native HTML attribute, limiting the maximum value
     */
    max?: number | string;
    /**
     * Maximum character length for an input
     */
    maxLength?: number;
    /**
     * Mimics the behavior of the native HTML attribute, limiting the minimum value
     */
    min?: number | string;
    /**
     * Minimum character length for an input
     */
    minLength?: number;
    /**
     * Allow for multiple lines of input
     */
    multiline?: boolean | number;
    /**
     * Name of the input
     */
    name?: string;
    /**
     * Callback when focus is removed
     */
    onBlur?(event: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Callback when value is changed
     */
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Callback when input is focused
     */
    onFocus?(event: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * A regular expression to check the value against
     */
    pattern?: string;
    /**
     * Hint text to display
     */
    placeholder?: string;
    /**
     * Disable editing of the input
     */
    isReadOnly?: boolean;
    /**
     * Defines a specific role attribute for the input
     */
    role?: string;
    /**
     * Indicate whether value should have spelling checked
     */
    hasSpellCheck?: boolean;
    /**
     * Limit increment value for numeric and date-time inputs
     */
    step?: number;
    /**
     * Determine type of input
     */
    type?: Type;
    /**
     * Initial value for the input
     */
    value?: string;
}
export declare function Input({ autoComplete, doesAutoFocus, id, inputMode, isDisabled, label, hasHiddenLabel, max, maxLength, min, minLength, multiline, name, onChange, pattern, placeholder, isReadOnly, role, hasSpellCheck, step, type, value, }: InputProps): JSX.Element;
export {};
