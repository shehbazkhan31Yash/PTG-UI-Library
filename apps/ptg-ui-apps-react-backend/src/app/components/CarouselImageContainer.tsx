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
  const chunkedItems = chunkArray(items, 3); // Chunk items into groups of 3
  return (
    <Carousel
      indicators
      interval={3000}
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
