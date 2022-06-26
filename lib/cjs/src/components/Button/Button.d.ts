interface IButton {
    type?: 'primary' | 'secondary' | 'outline' | 'inline';
    round?: boolean;
    fancy?: boolean;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    children: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}
declare const Button: ({ type, round, backgroundColor, fancy, size, children, className, onClick, disabled, }: IButton) => JSX.Element;
export default Button;
