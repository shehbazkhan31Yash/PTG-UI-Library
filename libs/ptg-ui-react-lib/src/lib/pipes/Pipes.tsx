import React, { ChangeEvent } from 'react';
import PtgUiInput from '../input/input';
import {
  capitalizeFirstLetter,
  truncateString,
  formatINR,
  formatPhoneNumber,
} from './pipe.util';

export interface PtgUiPipeProps {
  onChange?: (event: string) => void;
  isCapitalizedFirstLetter?: boolean;
  isFormatINR?: boolean;
  isTruncate?: boolean;
  isFormatPhoneNumber?: boolean;
}

export interface PtgUiPipeState {
  inputName: string;
  inputTruncateStr: string;
  inputCapitalizeTruncateString: string;
  inputCurrency: string;
  inputPhoneNumber: string;
}

export class PtgUiPipe extends React.Component<PtgUiPipeProps, PtgUiPipeState> {
  constructor(props: PtgUiPipeProps) {
    super(props);
    this.state = {
      inputName: '',
      inputCurrency: '',
      inputTruncateStr: '',
      inputPhoneNumber: '',
      inputCapitalizeTruncateString: '',
    };
  }

  handleCapitalizedFirstLetter = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const capitalizedValue = capitalizeFirstLetter(value);
    this.setState({ inputName: value });

    if (this.props.onChange) {
      this.props.onChange(capitalizedValue);
    }
  };

  handleCapitalizeFirstLetterAndTruncate = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const capitalizedValue = capitalizeFirstLetter(value);
    const finalValue = truncateString(capitalizedValue);

    this.setState({ inputCapitalizeTruncateString: value });

    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  };

  handleTruncate = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const truncatedValue = truncateString(value);
    this.setState({ inputTruncateStr: value });
    if (this.props.onChange) {
      this.props.onChange(truncatedValue);
    }
  };

  handleINRFormat = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = formatINR(value);
    this.setState({ inputCurrency: value });
    if (this.props.onChange) {
      this.props.onChange(formattedValue);
    }
  };

  handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(value);
    this.setState({ inputPhoneNumber: value });
    if (this.props.onChange) {
      this.props.onChange(formattedPhoneNumber);
    }
  };

  override render() {
    const {
      isCapitalizedFirstLetter,
      isFormatINR,
      isTruncate,
      isFormatPhoneNumber,
    }: PtgUiPipeProps = this.props;
    const {
      inputName,
      inputCurrency,
      inputTruncateStr,
      inputPhoneNumber,
      inputCapitalizeTruncateString,
    }: PtgUiPipeState = this.state;
    let pipeOutput;
    if (isTruncate && isCapitalizedFirstLetter) {
      pipeOutput = (
        <PtgUiInput
          type="text"
          id="inputCapitalizeTruncateString"
          name="inputCapitalizeTruncateString"
          value={inputCapitalizeTruncateString}
          className="form-control bg_0"
          onChange={this.handleCapitalizeFirstLetterAndTruncate}
        />
      );
    } else if (isCapitalizedFirstLetter) {
      pipeOutput = (
        <PtgUiInput
          type="text"
          id="firstLetterCapital"
          name="inputName"
          value={inputName}
          className={'form-control bg_0'}
          onChange={this.handleCapitalizedFirstLetter}
        />
      );
    } else if (isTruncate) {
      pipeOutput = (
        <PtgUiInput
          type="text"
          id="truncatePipeText"
          name="inputTruncateStr"
          value={inputTruncateStr}
          className="form-control bg_0"
          onChange={this.handleTruncate}
        />
      );
    } else if (isFormatINR) {
      pipeOutput = (
        <PtgUiInput
          type="text"
          id="inrFormatText"
          name="inputInr"
          value={inputCurrency}
          className="form-control bg_0"
          onChange={this.handleINRFormat}
        />
      );
    } else if (isFormatPhoneNumber) {
      pipeOutput = (
        <PtgUiInput
          type="text"
          id="phoneNumberPipes"
          name="inputPhoneNumber"
          value={inputPhoneNumber}
          className={'form-control bg_0'}
          onChange={this.handlePhoneNumber}
          maxlength="10"
        />
      );
    }

    return <>{pipeOutput}</>;
  }
}
