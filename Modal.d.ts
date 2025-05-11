import { default as React } from 'react';
export type ModalPosition = 'center' | 'bottom';
export type ModalSize = 'sm' | 'md' | 'lg';
export type ModalContainerProps = {
    width?: string;
    height?: string;
    position: ModalPosition;
    size?: ModalSize;
};
type ModalProps = ModalContainerProps & {
    title?: string;
    children?: React.ReactNode;
    onClose: () => void;
};
declare function Modal({ width, height, position, title, onClose, children, size }: ModalProps): import("react/jsx-runtime").JSX.Element;
export default Modal;
