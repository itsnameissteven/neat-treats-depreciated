import React from "react";
interface IInput {
    name?: string;
    id?: string;
    value: string;
    placeholder?: string;
    label?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    [x: string]: any;
}
declare const Input: ({ value, placeholder, onChange, name, id, className, label, ...rest }: IInput) => JSX.Element;
export default Input;
