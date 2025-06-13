// ClientCarousel.tsx
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
  return (
    <Carousel indicators interval={3000} pause="hover" fade>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <CarouselImageContainer imageUrl={item.imageURL} />
          {item.clientName && (
            <Carousel.Caption>
              <h5>{item.clientName}</h5>
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
    <div className="carousel-image-container">
      <Image
        src={imageUrl}
        fluid
        className="circular-image"
        alt={altText || 'Carousel image'}
      />
    </div>
  );
};
