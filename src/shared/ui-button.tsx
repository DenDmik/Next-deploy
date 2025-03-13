import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "outlined" | 'goldoutlined';
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        // сброс автом стилей браузера (надо??)
        // "-webkit-appearance:none ;-moz-appearance:none;",
//  убрал gap-2 
// " px-3 h-10 rounded cursor-pointer flex  items-center justify-center"
        "  px-2 h-10 rounded  flex  items-center justify-center text-base/4 md:text-xl md:h-12 ",
        {
          primary:
            " button text-white bg-teal-500 disabled:opacity-50 shadow shadow-teal-500/30 ",
          secondary:
            " button-red text-white bg-rose-500  disabled:opacity-50 shadow shadow-rose-500/30 ",
          outlined:
            "border border-slate-300  disabled:opacity-50",
          goldoutlined:
            " button-gold border outline-none disabled:opacity-50 bg-yellow-50 border-yellow-300",
        }[variant],
      )}
    />
  );
}