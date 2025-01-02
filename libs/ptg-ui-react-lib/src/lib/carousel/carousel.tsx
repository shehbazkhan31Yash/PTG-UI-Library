/* eslint-disable jsx-a11y/no-access-key */
/**
 * @since Dec 2024
 * @author Manish Patidar
 * @desc Reusable Calendar Component
 *
 */
import './carousel.scss';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
export interface CarouselProps {
  imgHeight?: string;
  imgWidth?: string;
  images?: string[];
  showIndicators?: boolean;
}

export function PtgUiCarousel({
  imgHeight,
  imgWidth,
  images = [],
  showIndicators = true,
}: CarouselProps) {
  return (
    <>
      <div className="parent-container">
        <div className="carousel">
          <ul
            className="slides"
            style={{
              minHeight: `${imgHeight}`,
              width: `${imgWidth}`,
            }}
          >
            {images.length
              ? images.map((imgPath, index) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        name="radio-buttons"
                        id={`img-${index}`}
                        checked
                      />
                      <li className="slide-container">
                        <div className="slide-image">
                          <img src={imgPath} alt="Image" />
                        </div>
                        <div
                          className="carousel-controls"
                          style={{ lineHeight: imgHeight }}
                        >
                          <label
                            htmlFor={`img-${
                              index == 0 ? images.length - 1 : index - 1
                            }`}
                            className="prev-slide"
                          >
                            <span>&lsaquo;</span>
                          </label>
                          <label
                            htmlFor={`img-${
                              index == images.length - 1 ? 0 : index + 1
                            }`}
                            className="next-slide"
                          >
                            <span>&rsaquo;</span>
                          </label>
                        </div>
                      </li>
                    </div>
                  );
                })
              : null}
            {showIndicators && (
              <div className="carousel-dots">
                {images.map((imgPath, index) => (
                  <label
                    htmlFor={`img-${index}`}
                    className="carousel-dot"
                    id={`img-dot-${index}`}
                    key={imgPath}
                  ></label>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PtgUiCarousel;
