import { IPtgUiAccordionProps } from '../interfaces';
import './Accordion.css';

/**
 * PtgUiAccordion component to render a customizable accordion with collapsible sections.
 *
 * @param {IPtgUiAccordionProps} props - The properties for the PtgUiAccordion component.
 * @param {Array} props.accordionItems - An array of accordion items, each containing a title and content.
 * @param {Function} props.handleToggle - Callback function triggered when an accordion item is toggled.
 * @param {number} props.activeIndex - The index of the currently active (expanded) accordion item.
 * @returns {JSX.Element} The rendered accordion component.
 */

export const PtgUiAccordion: React.FC<Readonly<IPtgUiAccordionProps>> = ({
	accordionItems,
	handleToggle,
	activeIndex,
}) => {
	return (
		<div className="accordion ">
			{accordionItems?.map((item, index) => (
				<div key={`${item?.title}-${index}`} className="accordion-item bg-dark border-secondary">
					<h2 className="accordion-header " id={`heading${index}`}>
						<button
							className={`accordion-button shadow-sm p-3 bg-secondary text-light border-0 ${activeIndex === index ? '' : 'collapsed'}`}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#collapse${index}`}
							aria-expanded={activeIndex === index}
							aria-controls={`collapse${index}`}
							onClick={() => handleToggle(index)}
						>
							{item?.title}
						</button>
					</h2>
					<div
						id={`collapse${index}`}
						className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
						aria-labelledby={`heading${index}`}
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body  text-light border-top border-secondary">{item?.content}</div>
					</div>
				</div>
			))}
		</div>
	);
};