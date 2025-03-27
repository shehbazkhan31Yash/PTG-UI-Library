import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IRatingWithHoverLabel } from '@ptg-react-app/interfaces';
import { Rating } from '@ptg-react-libs/rating/rating';
import { useState } from 'react';

export const RatingWithHoverLabel = (props: IRatingWithHoverLabel) => {
  const [value, setValue] = useState<number>(2);
  const [hover, setHover] = useState<number>(-1);

  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const componentCode = `import { Rating } from '@ptg-react-libs/rating/rating';`;

  // Note: HTML code for Rating
  const htmlCode = `
  const [value, setValue] = useState<number>(2);
  const [hover, setHover] = useState<number>(-1);

  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  return (
  <>
        <Rating
            value={value}
            onChange={setValue}
            precision={0.5}
            onHover={setHover}
          />
          {value !== null && (
            <span style={{ margin: '8px 0px 0px 10px' }}>
              {labels[hover !== -1 ? hover : value]}
            </span>
          )}
  </>
  )
  `;

  return (
    <section>
      {props?.showCodeWithHoverLabel && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="d-flex justify-content-center">
          <Rating
            value={value}
            onChange={setValue}
            precision={0.5}
            onHover={setHover}
          />
          {value !== null && (
            <span style={{ margin: '8px 0px 0px 10px' }}>
              {labels[hover !== -1 ? hover : value]}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
