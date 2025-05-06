import { PtgUiCustomAvatarProps } from '@ptg-react-libs/interfaces';
import React from 'react';

/**
 * PtgUiCustomAvatar Component
 * 
 * A functional component that renders a customizable avatar.
 * 
 * @param {PtgUiCustomAvatarProps} props - The props for the component.
 * @param {string} props.alt - Alt text for the avatar image.
 * @param {string} props.src - Image source for the avatar.
 * @param {number} props.size - Size of the avatar in pixels.
 * @param {string} props.backgroundColor - Background color for the avatar.
 * @param {string} props.textColor - Text color for the   avatar content.
 * @param {React.ReactNode} props.children - Fallback content (e.g., initials) if no image is provided.
 * @param {'square' | 'rounded' | 'circle'} props.variant - Shape of the avatar (square, rounded, or circle).
 * @returns {JSX.Element} A JSX element representing the avatar.
 */
export const PtgUiCustomAvatar: React.FC<PtgUiCustomAvatarProps> = ({
  alt = '',
  src = '',
  size = 40,
  backgroundColor = '#f0f0f0',
  textColor = '#000',
  children,
  variant = 'circle',
}) => {
  let borderRadius: string;
  if (variant === 'circle') {
    borderRadius = '50%';
  } else if (variant === 'rounded') {
    borderRadius = '10%';
  } else {
    borderRadius = '0';
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          width: size,
          height: size,
          borderRadius,
          objectFit: 'cover',
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor,
        color: textColor,
        fontSize: size / 2.5,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};
