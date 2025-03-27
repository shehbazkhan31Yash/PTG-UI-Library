import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IRatingWithDefaultProps } from '@ptg-react-app/interfaces';
import { Rating } from '@ptg-react-libs/rating/rating';

export const RatingWithDefaultProps = (props: IRatingWithDefaultProps) => {
  const componentCode = `import { Rating } from '@ptg-react-libs/rating/rating';`;

  // Note: HTML code for Rating
  const htmlCode = `<Rating onChange={setRating} />`;

  return (
    <section>
      {props?.showCodeDefaultRating && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="d-flex justify-content-center">
          <Rating value={props?.value} onChange={props?.setRating} />
        </div>
        <div className="d-flex justify-content-center">
          <b>Rating:</b>&nbsp;&nbsp;{props?.value}
        </div>
      </div>
    </section>
  );
};
