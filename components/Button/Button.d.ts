type ButtonProps = {
    variant: 'confirm' | 'cancel';
    onClick: () => void;
    children: React.ReactNode;
};
declare function Button({ variant, onClick, children }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
