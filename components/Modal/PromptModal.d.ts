type PromptModalProps = {
    message: string;
    placeholder?: string;
    onCancel: () => void;
    onConfirm: (input: string) => void;
};
declare function PromptModal({ message, placeholder, onCancel, onConfirm }: PromptModalProps): import("react/jsx-runtime").JSX.Element;
export default PromptModal;
