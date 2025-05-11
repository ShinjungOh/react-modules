import { KeyboardEvent } from 'react';
type UseFocusTrapProps<T extends HTMLElement = HTMLElement> = {
    initialFocusRef?: React.RefObject<T>;
    onEscape?: () => void;
};
export declare function useFocusTrap<T extends HTMLElement = HTMLElement>({ initialFocusRef, onEscape }?: UseFocusTrapProps<T>): {
    containerRef: import('react').RefObject<HTMLDivElement | null>;
    handleKeyDown: (e: KeyboardEvent) => void;
};
export {};
