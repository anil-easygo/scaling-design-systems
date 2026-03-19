import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

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

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-button-primary text-button-text-on-primary border-button-border hover:bg-button-primaryHover"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-[0.95em]",
  md: "px-4 py-2"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      className,
      disabled,
      type,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={clsx(
          "inline-flex min-h-control items-center justify-center gap-2 border rounded-button font-button text-button leading-button transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-disabled",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        {...rest}
      >
        {loading && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-black/70 border-r-transparent"
            aria-hidden="true"
          />
        )}
        <span className="flex items-center justify-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
