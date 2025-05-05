import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IRatingWithVariousSize } from '@ptg-react-app/interfaces';
import { PtgUiRating } from '@ptg-react-libs/rating/rating';

export const RatingWithVariousSize = (props: IRatingWithVariousSize) => {
  const componentCode = `import { PtgUiRating } from '@ptg-react-libs/rating/rating';`;

  // Note: HTML code for Rating
  const htmlCode = `
    <PtgUiRating defaultValue={2.5} size={24} />
    <PtgUiRating defaultValue={2.5} size={28} />
    <PtgUiRating defaultValue={2.5} size={32} />
  `;

  return (
    <section>
      {props?.showCodeWithVariousSize && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="d-flex justify-content-center">
          <PtgUiRating defaultValue={2.5} size={24} />
        </div>
        <div className="d-flex justify-content-center">
          <PtgUiRating defaultValue={2.5} size={28} />
        </div>
        <div className="d-flex justify-content-center">
          <PtgUiRating defaultValue={2.5} size={32} />
        </div>
      </div>
    </section>
  );
};
