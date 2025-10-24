import React from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputText = ({ onChange, onBlur, onFocus, ...props }: InputTextProps) => {
  return (
    <input
      {...props}
      className="input-text"
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default InputText;
