import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(cls.container, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
