import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  maxWidth?: string;
}

const Image = ({ className, maxWidth = '767px', ...props }: ImageProps) => {
  return (
    <>
      <picture className={`image-picture${className ? className : ''}`}>
        <source srcSet={props.src} media={`(max-width: ${maxWidth})`} />
        <img className="image-fluid" {...props} />
      </picture>
    </>
  );
};

export default Image;
