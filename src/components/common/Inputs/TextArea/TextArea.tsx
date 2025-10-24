import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ onChange, onBlur, onFocus, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className="textarea"
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default TextArea;
