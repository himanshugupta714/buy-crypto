import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={cx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default Button;
