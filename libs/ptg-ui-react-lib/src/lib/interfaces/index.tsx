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

