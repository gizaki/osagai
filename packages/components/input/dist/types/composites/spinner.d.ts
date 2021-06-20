/// <reference types="react" />
import '../../styles/input.style.scss';
declare type HandleStepFn = (step: number) => void;
export interface SpinnerProps {
    /**
     * Callback when value is changed
     */
    onChange: HandleStepFn;
    /**
     * Callback when the spinner is clicked
     */
    onClick?(): void;
}
export declare function Spinner({ onChange, onClick }: SpinnerProps): JSX.Element;
export {};
