/* eslint-disable jsx-a11y/no-access-key */
/**
 * @since Dec 2024
 * @author Manish Patidar
 * @desc Reusable Calendar Component
 *
 */
import { ICarouselProps } from '../interfaces';
import './carousel.scss';


export function PtgUiCarousel({
  imgHeight,
  imgWidth,
  images = [],
  showIndicators = true,
}: Readonly<ICarouselProps>) {
  return (

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
                <>
                  <div key={imgPath}>
                    <input
                      type="radio"
                      name="radio-buttons"
                      id={`img-${index}`}
                      checked
                    />
                    <li className="slide-container">
                      <div className="slide-image">
                        <img src={imgPath} alt="Carousal" />
                      </div>
                      <div
                        className="carousel-controls"
                        style={{ lineHeight: imgHeight }}
                      >
                        <label
                          htmlFor={`img-${index === 0 ? images.length - 1 : index - 1
                            }`}
                          className="prev-slide"
                          aria-label="Previous Slide"
                        >
                          <span>&lsaquo;</span>
                        </label>
                        <label
                          htmlFor={`img-${index === images.length - 1 ? 0 : index + 1
                            }`}
                          className="next-slide"
                          aria-label="Next Slide"
                        >
                          <span>&rsaquo;</span>
                        </label>
                      </div>
                    </li>
                  </div>
                  {showIndicators && (
                    <div className="carousel-dots">
                      {images.map((dotIndex) => (
                        <label
                          htmlFor={`img-${index}`}
                          className="carousel-dot"
                          id={`img-dot-${index}`}
                          key={dotIndex}
                           aria-label="Slide dots"
                        ></label>
                      ))}
                    </div>
                  )}
                </>
              );
            })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default PtgUiCarousel;
