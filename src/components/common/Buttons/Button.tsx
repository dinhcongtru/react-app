import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

const Button = ({ className, onClick, children, icon = false, ...props }: ButtonProps) => {
  return (
    <button className={`btn btn-submit${className ? className : ''}`} onClick={onClick} {...props}>
      <span className="btn-text">{children}</span>
      {icon && <span className="btn-icon" />}
    </button>
  );
};

export default Button;
