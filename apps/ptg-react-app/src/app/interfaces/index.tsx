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

export interface IExampleOneProps {
  showCodeOne: boolean;
}

export interface IDateState {
  startDate: Date | null;
  endDate: Date | null;
  dateRange: Date | null;
}



export interface ISetDateState {
  date: Date | null, field: 'startDate' | 'endDate' | 'dateRange'
}

export  interface IDatePickerProps {
  selected: Date | null | string;
  className: string;
  onChange: (d: React.ChangeEvent<HTMLInputElement>) => void;
  startDate: Date|string;
  endDate: Date | null;
  disabled: boolean;
}




  
  
 


