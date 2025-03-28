import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IRatingWithPrecision } from '@ptg-react-app/interfaces';
import { Rating } from '@ptg-react-libs/rating/rating';

export const RatingWithPrecision = (props: IRatingWithPrecision) => {
  const componentCode = `import { Rating } from '@ptg-react-libs/rating/rating';`;

  // Note: HTML code for Rating
  const htmlCode = `
  <Rating defaultValue={2.5} precision={0.5} />
  <Rating defaultValue={2.5} precision={0.5} readOnly/>
  `;

  return (
    <section>
      {props?.showCodePrecisionRating && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="d-flex justify-content-center">
          <Rating defaultValue={2.5} precision={0.5} />
        </div>
        <div className="d-flex justify-content-center">
          <Rating defaultValue={2.5} precision={0.5} readOnly />
        </div>
      </div>
    </section>
  );
};
