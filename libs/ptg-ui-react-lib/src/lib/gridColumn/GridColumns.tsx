interface IGridColumnUiProps {
  children: React.ReactNode;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  offsetLg?: number;
  offsetMd?: number;
  offsetSm?: number;
  className?: string;
}

export function PtgUiGridColumn(props: IGridColumnUiProps) {
  const {
    xl = '',
    children = '',
    lg = '',
    md = '',
    sm = '',
    xs = '',
    offsetLg = '',
    offsetMd = '',
    offsetSm = '',
    className= '',
    ...params
  } = props;
  // Construct the class names based on the props
  const classNames = [
    `col-xl-${xl}`,
    `col-lg-${lg}`,
    `col-md-${md}`,
    `col-sm-${sm}`,
    `col-xs-${xs}`,
    `offset-lg-${offsetLg}`,
    `offset-md-${offsetMd}`,
    `offset-sm-${offsetSm}`,
    className,
  ].join(' ');


  return <div className={classNames} {...params}>{children}</div>;
}

export default PtgUiGridColumn;
