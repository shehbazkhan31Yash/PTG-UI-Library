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
    title?:string;
    content?:string;
}
  export interface IPtgUiAccordionProps { 
    accordionItems: IAccordionItemProps[];
    handleToggle:(index:number) => void;
    activeIndex: number | null;
  }

