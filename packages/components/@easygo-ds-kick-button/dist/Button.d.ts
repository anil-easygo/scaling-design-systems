import type { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonSize = "sm" | "md";
export type ButtonVariant = "primary";
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    className?: string;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
