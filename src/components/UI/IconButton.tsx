import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  styles?: string;
  variant?: "contained" | "outlined";
  icon: ReactNode;
}

type Ref = HTMLButtonElement;

export const IconButton = forwardRef<Ref, Props>(
  ({ styles, variant = "contained", icon, ...props }: Props) => {
    return (
      <button
        {...props}
        className={`${
          variant === "contained" ? "bg-orange" : "bg-light-orange"
        } ${
          variant === "contained" ? "text-white" : "text-orange"
        } border-none font-semibold rounded-full w-fit p-2 px-4  ${styles}`}
      >
        {icon}
      </button>
    );
  }
);
