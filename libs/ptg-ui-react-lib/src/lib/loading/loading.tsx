
import './loading.css';
import { PtgUiLoadingProps } from '../interfaces';
/**
 * PtgUiLoading Component
 * 
 * A functional component that renders a custom loader .
 * 
 * @param {Readonly<PtgUiLoadingProps>} props - The props for the loader component.
 * @param {string} props.type - The type of loader to display. Can be 'dot', 'linear', or 'circular'.
 * @param {string} props.color - The background color for the loader(s). This will be applied to the dots or the loader's background.
 * @returns {JSX.Element} A JSX element representing the loader.
 */
export const PtgUiLoading = ({ type, color }: Readonly<PtgUiLoadingProps>) => {
	return (
		<>
			{type === 'dot' &&
				<div className="loader">
					<div className="dot" style={{ backgroundColor: color }}></div>
					<div className="dot" style={{ backgroundColor: color }}></div>
					<div className="dot" style={{ backgroundColor: color }}></div>
				</div>
			}
			{type !== 'dot' &&
				<div className="loaders-container">
					{type === 'linear' && <div className="linear-loader" style={{ backgroundColor: color }}></div>}
					{type === 'circular' && <div className="circular-loader" style={{ borderTop: `8px solid ${color}` }}></div>}
				</div>
			}
		</>
	);
}