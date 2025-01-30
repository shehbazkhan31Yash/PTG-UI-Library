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
