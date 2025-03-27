import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IRatingWithDefaultProps } from '@ptg-react-app/interfaces';
import { Rating } from '@ptg-react-libs/rating/rating';

export const RatingWithDefaultProps = (props: IRatingWithDefaultProps) => {
  return (
    <section>
      <div className="mb-3">
        <div className="d-flex justify-content-center">
          <Rating
            value={props?.value}
            onChange={props?.setRating}
            readOnly={props?.readonly}
            disabled={props?.disabled}
            defaultValue={props?.defaultValue}
          />
        </div>
      </div>
    </section>
  );
};
