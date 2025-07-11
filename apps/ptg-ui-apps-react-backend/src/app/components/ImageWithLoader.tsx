import React from 'react';
import { Image } from 'react-bootstrap';

type ImageWithLoaderProps = {
  src: string;
  alt: string;
  imageKey: 'vision' | 'mission';
  className?: string;
  description: string;
};

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  imageKey,
  className = '',
  description,
}) => (
  <div
    className="position-relative card-hover-group"
    style={{ display: 'inline-block' }}
  >
    <Image
      src={src}
      fluid
      alt={alt}
      style={{ background: 'none' }}
      className={`${className}`}
    />
    <div
      className="position-absolute hoverContainer"
      style={{
        top: 10,
        left: 10,
        zIndex: 2,
        color: '#222',
        background: 'rgba(255,255,255,0)',
        padding: '1rem',
        maxWidth: '90%',
      }}
    >
      <h2 className="pt-3 pb-2 titleCard">{imageKey}</h2>
      <p className="lead about-text text-dark textCard">{description}</p>
    </div>
  </div>
);

export default ImageWithLoader;
