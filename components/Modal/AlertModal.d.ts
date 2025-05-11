type AlertModalProps = {
    message: string;
    description?: string;
    onConfirm: () => void;
    height?: string;
};
declare function AlertModal({ message, description, onConfirm, height }: AlertModalProps): import("react/jsx-runtime").JSX.Element;
export default AlertModal;
