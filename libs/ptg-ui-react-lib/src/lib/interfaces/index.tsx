// Pagination
interface IBreadcrumbItem {
  title: string;
  link: string;
}

export interface IPtgUiBreadcrumbsProps {
  datalist: IBreadcrumbItem[];
}

// Accordion
export interface IAccordionItemProps {
  title?: string;
  content?: string;
}
export interface IPtgUiAccordionProps {
  accordionItems: IAccordionItemProps[];
  handleToggle: (index: number) => void;
  activeIndex: number | null;
}

export interface AlertProps {
  message?: string;
  type?: string;
}

//forgot password
export interface IForgotPassword {
  onForgotPasswordSubmit?: Function | undefined;
  fPasswordEmail?: Function | undefined;
  forgotPasswordLabel?: string | undefined;
}

export interface IValues {
  show: boolean;
  email: string;
  btnDisable: boolean;
  showMessage: { show: boolean; type: string; message: string };
}

export interface IFormErrorForgotPWD {
  email: boolean;
  password: boolean;
}

export interface IState {
  values: IValues;
  formErr: IFormErrorForgotPWD;
}

//login
export interface IUserLogin {
  email: string;
  password: string;
}

export interface PtgUiLoginProps {
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  loginButtonName?: string;
  signupMsg?: string;
  signupButtonName?: string;
  msalButtonName?: string;
  forgotPasswordLabel?: string;
  imgPath?: string;
  handleChange?: Function;
  user?: IUserLogin;
  emailType?: string;
  passwordType?: string;
  isEmailValid?: boolean;
  onLoginClick?: Function;
  onMsalClick?: Function;
  isForgotPassword?: boolean;
  onForgotPasswordSubmit?: Function;
  getForgetEmail?: Function;
  errorMessage?: string;
  successMessage?: string;
}

export interface IUserSignup {
  username?: string;
  email?: string;
  gender?: string;
  city?: string;
  password?: string;
  confirmPassword?: string;
  error?: string | undefined | null;
  disable?: boolean;
}

export interface IFormErr {
  username?: boolean;
  email?: boolean;
  gender?: boolean;
  city?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
}

export interface PtgUiSignupProps {
  handleCheckChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  user?: IUserSignup;
  formErr?: IFormErr;
  isDisabled: Function;
  date?: Date | null | string;
  selectedCheck?: boolean;
  onSubmit?: Function;
  errorMessage?: string;
  successMessage?: string;
}
