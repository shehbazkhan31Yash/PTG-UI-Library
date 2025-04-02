import '../Login/login.css';
import { PtgUiAlert } from '../../alert/alert';
//File contains common components used in the auth module.

/**
 * Component to display error and success messages.
 *
 * @param {Object} props - The properties for the MessageDisplay component.
 * @param {string} props.errorMessage - The error message to display.
 * @param {string} props.successMessage - The success message to display.
 * @returns {JSX.Element} The rendered message display component.
 */
export const MessageDisplay = ({ errorMessage, successMessage }) => (
	<div className="form-group">
		{errorMessage && <PtgUiAlert type="danger" message={errorMessage} />}
		{successMessage && <PtgUiAlert type="success" message={successMessage} />}
	</div>
);

/**
 * Utility function to conditionally apply class names.
 *
 * @param {...(string | undefined | null | false)[]} classes - The class names to conditionally apply.
 * @returns {string} The combined class names.
 */
export const classNames = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');
