/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Button
 * @Updated Manish Patidar
 *
 */
import React from 'react';
import './button.scss';

interface PtgUiButtonProps {
  variant?: string;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: any;
  appearance?: any;
  btnIconAlignment?: any;
  hasbtnIconSlot?: any;
  text?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  backgroundColor?: string;
  type?: any;
  border?: string;
}

export function PtgUiButton(props: PtgUiButtonProps) {
  const {
    appearance,
    btnIconAlignment,
    text,
    hasbtnIconSlot,
    onClick,
    width,
    height,
    fontSize,
    fontWeight,
    children,
    textColor,
    backgroundColor,
    disabled,
    type = 'button',
    border,
  } = props;

  const buttonStyle = {
    width: width,
    height: height,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textColor: textColor,
    backgroundColor: backgroundColor,
    border: border,
  };

  return (
    <button
      style={buttonStyle}
      className={`btn ${appearance}`}
      type={type}
      onClick={() => onClick() || ''}
      disabled={disabled}
    >
      {btnIconAlignment === 'left' && hasbtnIconSlot && (
        <div className="showRight">{children}</div>
      )}
      <span style={{ color: textColor }}> {text}</span>
      {btnIconAlignment === 'right' && hasbtnIconSlot && (
        <div className="showLeft">{children}</div>
      )}
      {!btnIconAlignment && !text && children}
    </button>
  );
}

export default PtgUiButton;
