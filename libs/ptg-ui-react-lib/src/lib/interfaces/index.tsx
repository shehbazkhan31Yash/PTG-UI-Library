// Pagination 
interface IBreadcrumbItem {
  title: string;
  link: string;
}

//Breadcrumb
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


//Button
export const enum BUTTON_TYPE {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}
export interface IPtgUiButtonProps {
  variant?: string;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  appearance?: string;
  btnIconAlignment?: string;
  hasbtnIconSlot?: boolean;
  text?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  backgroundColor?: string;
  type?: 'button' | 'submit' | 'reset';
  border?: string;
}



//Cards
export interface ICardUiProps {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  buttonColor?: string;
  buttonWidth?: string;
  children?: React.ReactNode;
  imageWidth?: string;
  imageHeight?: string;
  backgroundColor?: string;
  buttonTextColor?: string;
}


// Carousel

export interface ICarouselProps {
  imgHeight?: string;
  imgWidth?: string;
  images?: string[];
  showIndicators?: boolean;
}

//MultiStepForm

export interface PtgUiMultiStepState {
  isDisabled: boolean;
}

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
