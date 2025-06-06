export const CarouselImageContainer: React.FC<{ imageUrl: string }> = ({
  imageUrl,
}) => (
  <div
    style={{
      width: '100%',
      height: '200px',
      backgroundColor: '#777',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
    }}
  >
    <img
      src={imageUrl}
      width="250"
      height="auto"
      className="d-inline-block align-top"
      alt="client logo"
    />
  </div>
);
