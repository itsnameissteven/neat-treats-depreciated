interface IconProps {
    name: string;
    color?: string;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}
declare const Icon: ({ name, size, color, className, onClick, disabled, }: IconProps) => JSX.Element | null;
export default Icon;
