import styles from './ptg-ui-react-lib.module.scss';

/* eslint-disable-next-line */
export interface PtgUiReactLibProps {}

export function PtgUiReactLib(props: PtgUiReactLibProps) {
	return (
		<div className={styles['container']}>
			<h1>Welcome to PtgUiReactLib!</h1>
		</div>
	);
}

export default PtgUiReactLib;
