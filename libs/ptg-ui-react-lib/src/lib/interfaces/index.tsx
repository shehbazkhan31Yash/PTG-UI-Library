// Pagination 
interface IBreadcrumbItem {
    title: string;
    link: string;
    id:number
  }
  
  export interface IPtgUiBreadcrumbsProps { 
    datalist: IBreadcrumbItem[];
  }


