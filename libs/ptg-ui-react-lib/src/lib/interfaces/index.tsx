// Pagination 
interface IBreadcrumbItem {
    title: string;
    link: string;
  }
  
  export interface IPtgUiBreadcrumbsProps { 
    datalist: IBreadcrumbItem[];
  }



  // Accordion
  export interface AccordionItemProps {
    title?:string;
    content?:string;
}
  export interface PtgUiAccordionProps {
    accordionItems: AccordionItemProps[];
    handleToggle:(index:number) => void;
    activeIndex: number | null;
  }

  export interface data{
    title:string;data:string
  }


