interface GridColumnUiProps {
  children: React.ReactNode; 
  xl?: number
  lg?: number; 
  md?: number; 
  sm?: number; 
  xs?: number; 
  offsetLg?: number; 
  offsetMd?: number; 
  offsetSm?: number; 
  className?: string;
}

export function PtgUiGridColumn(props: GridColumnUiProps) {
  const { xl, children, lg, md, sm, xs, offsetLg, offsetMd, offsetSm, className='' } = props;
  // Construct the class names based on the props
  const classNames = [
    xl ? `col-xl-${xl}` : '',
    lg ? `col-lg-${lg}` : '',
    md ? `col-md-${md}` : '',
    sm ? `col-sm-${sm}` : '',
    xs ? `col-xs-${xs}` : '',
    offsetLg ? `offset-lg-${offsetLg}` : '',
    offsetMd ? `offset-md-${offsetMd}` : '',
    offsetSm ? `offset-sm-${offsetSm}` : '',
    className,
  ].join(' ');

  return <div className={classNames}>{children}</div>;
}

export default PtgUiGridColumn;
