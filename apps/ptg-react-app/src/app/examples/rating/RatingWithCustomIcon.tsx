import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IRatingWithCustomIcon } from '@ptg-react-app/interfaces';
import { PtgUiRating } from '@ptg-react-libs/rating/rating';

export const RatingWithCustomIcon = (props: IRatingWithCustomIcon) => {
  const componentCode = `import { Rating } from '@ptg-react-libs/rating/rating';`;

  // Note: HTML code for Rating
  const htmlCode = `
    <PtgUiRating defaultValue={2} icon="❤️" emptyIcon="🤍" precision={0.5}/>
    <PtgUiRating defaultValue={2.5} icon="😊" emptyIcon="😐" precision={0.5}/>
    <PtgUiRating defaultValue={2.5} size={32} precision={0.5}/>
  `;

  return (
    <section>
      {props?.showCodeWithCustomIcon && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="d-flex justify-content-center">
          <PtgUiRating
            defaultValue={2}
            icon="❤️"
            emptyIcon="🤍"
            precision={0.5}
          />
        </div>
        <div className="d-flex justify-content-center">
          <PtgUiRating
            defaultValue={2.5}
            icon="😊"
            emptyIcon="😐"
            precision={0.5}
          />
        </div>
        <div className="d-flex justify-content-center">
          <PtgUiRating defaultValue={2.5} size={40} precision={0.5} />
        </div>
      </div>
    </section>
  );
};
