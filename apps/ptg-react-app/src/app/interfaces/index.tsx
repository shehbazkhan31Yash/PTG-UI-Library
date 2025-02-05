// Pagination
export interface IBreadcrumb {
  title: string;
  link: string;
}

export interface ICardItems {
  id: number;
  image: string;
  title: string;
  content: string;
  button: string;
}

// accordions
export interface IAccordion {
  title: string;
  content: string;
}
// Calender 
export interface IExampleOneProps {
  showCodeOne: boolean;
}
export interface IExampleTwoProps {
  showCodeTwo: boolean;
}
export interface IExampleThreeProps {
  showCodeThree: boolean;
}

export interface ITimeZoneProps {
  showCodeLocalDate: boolean;
}


export interface IDateState {
  startDate?: Date | null;
  endDate?: Date | null;
  dateRange?: Date | null;
  errorMsg?:boolean
}



export  interface IDatePickerProps {
  selected?: Date | null | string;
  className?: string;
  onChange?: (d: React.ChangeEvent<HTMLInputElement>) => void;
  startDate?: Date|string;
  endDate?: Date | null;
  disabled?: boolean;
}

// login
export interface ILogin {
  email: string;
  password: string;
}

//MultiStepForm
export interface IUserDetails {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  greeting: string;
  gender: string;
  phone: string;
  zipCode: string;
  state: string;
  homeAddress: string;
  country: string;
  cardType: string;
  cardNumber: string;
  cvc: string;
  expiration: string;
  cardHolder: string;
}

//MultiStepForm
export interface IUserErrors {
  firstName: boolean;
  lastName: boolean;
  userName: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  greeting: boolean;
  gender: boolean;
  phone: boolean;
  zipCode: boolean;
  state: boolean;
  homeAddress: boolean;
  country: boolean;
  cardType: boolean;
  cardNumber: boolean;
  cvc: boolean;
  expiration: boolean;
  cardHolder: boolean;
}

//signup
export interface IUser {
  username?: string;
  email?: string;
  gender?: string;
  city?: string;
  password?: string;
  confirmPassword?: string;
  error?: string | undefined | null;
  disable?: boolean;
}

export interface IFormError {
  username?: boolean;
  email?: boolean;
  gender?: boolean;
  city?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
}

export interface IStep {
  id: number;
  label: string; 
}

export interface IPtgUiMutliStep {
  details?: IUserDetails;
  error?: IUserDetails;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  resetForm?: () => void;
  submitForm?: () => void;
  orientation?: string;
}