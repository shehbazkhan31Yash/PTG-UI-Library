import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
interface CarouselItem {
  imageURL: string;
  clientName?: string; // Optional: add a name for the client if needed
}
interface ClientCarouselProps {
  items: CarouselItem[];
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ items }) => {
  const [index, setIndex] = React.useState(0);
  const chunkedItems = chunkArray(items, 3); // Chunk items into groups of 3
  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        activeIndex={index}
        onSelect={setIndex}
        indicators
        interval={3000}
        controls={false}
        pause="hover"
        fade
        data-bs-theme="dark"
      >
        {chunkedItems.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {chunk.map((item, itemIndex) => (
                <CarouselImageContainer
                  key={item.clientName + '' + itemIndex}
                  imageUrl={item.imageURL}
                  altText={item.clientName}
                />
              ))}
            </div>
            {chunk.some((item) => item.clientName) && (
              <Carousel.Caption>
                <h5>{chunk.map((item) => item.clientName).join(', ')}</h5>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      <button
        className="carousel-control-prev"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 10,
          background: 'none',
          border: 'none',
          opacity: 'unset',
          width:'auto',
          height:'max-content',
          transform:'translateY(-50%)'
        }}
        onClick={() =>
          setIndex((prev) => (prev === 0 ? chunkedItems.length - 1 : prev - 1))
        }
      >
        <span
          className="bi bi-chevron-left"
          style={{ fontSize: '3rem', color: '#222021' }}
        />
      </button>
      <button
        className="carousel-control-next"
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          zIndex: 10,
          background: 'none',
          border: 'none',
          opacity: 'unset',
          width:'auto',
          height:'max-content',
          transform:'translateY(-50%)'
        }}
        onClick={() =>
          setIndex((prev) => (prev === chunkedItems.length - 1 ? 0 : prev + 1))
        }
      >
        <span
          className="bi bi-chevron-right"
          style={{ fontSize: '3rem', color: '#222021' }}
        />
      </button>
    </div>
  );
};
export default ClientCarousel;
interface CarouselImageContainerProps {
  imageUrl: string;
  altText?: string; // Optional alt text for accessibility
}
const CarouselImageContainer: React.FC<CarouselImageContainerProps> = ({
  imageUrl,
  altText,
}) => {
  return (
    <div
      className="carousel-image-container"
      style={{ flex: '1 1 30%', margin: '0 10px' }}
    >
      <Image
        src={imageUrl}
        fluid
        className="circular-image"
        alt={altText ?? 'Carousel image'}
      />
    </div>
  );
};
// Utility function to chunk the items array
const chunkArray = (array: any[], chunkSize: number) => {
  const result: any[] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};
