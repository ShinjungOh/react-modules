type ConfirmModalProps = {
    message: string;
    description?: string;
    onCancel: () => void;
    onConfirm: () => void;
    height?: string;
};
declare function ConfirmModal({ message, description, onCancel, onConfirm, height }: ConfirmModalProps): import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
