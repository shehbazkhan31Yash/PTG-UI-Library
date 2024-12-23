import './accordian.scss';

/* eslint-disable-next-line */
export interface PtgUiAccordianProps {
  accordionItems: any;
  handleToggle: any;
  activeIndex: any;
}

export function PtgUiAccordian(props: PtgUiAccordianProps) {
  const { accordionItems, handleToggle, activeIndex } = props;

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button shadow-sm p-3 bg-white rounded ${
                activeIndex === index ? 'collapsed' : ''
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
              aria-controls={`collapse${index}`}
              onClick={() => handleToggle(index)}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              activeIndex === index ? 'show' : ''
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PtgUiAccordian;
