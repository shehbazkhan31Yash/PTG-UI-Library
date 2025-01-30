/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Button
 * @Updated Manish Patidar
 *
 */

import './button.scss';
import { IPtgUiButtonProps } from '../interfaces';

export function PtgUiButton(props: Readonly<IPtgUiButtonProps>) {
  const {
    appearance,
    btnIconAlignment,
    text,
    hasbtnIconSlot,
    onClick = () => {
      return;
    },
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
  // Note that the buttonStyle object is defined in the function body.
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
      onClick={onClick}
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
