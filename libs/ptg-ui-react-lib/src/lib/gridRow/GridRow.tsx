import React from 'react';

interface RowUiProps {
	children?: React.ReactNode;
	className?: string;
}

export function PtgUiRow(props: RowUiProps) {
	const { children, className = '' } = props;
	return <div className={`row ${className}`}>{children}</div>;
}

export default PtgUiRow;
