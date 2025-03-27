import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import { RatingWithDefaultProps } from './RatingWithDefaultProps';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import './rating.css';
import { RatingWithPrecision } from './RatingWithPrecision';
import { RatingWithHoverLabel } from './RatingWithHoverLabel';

const RatingExample = () => {
  const { t } = useTranslation();
  const [defaultPropsRating, setDefaultPropsRating] = useState(2);
  const [defaultRatingZero, setDefaultRatingZero] = useState(0);
  const [showCodeDefaultRating, setShowCodeDefaultRating] =
    useState<boolean>(false);

  const [showCodePrecisionRating, setShowCodePrecisionRating] =
    useState<boolean>(false);

  const [showCodeWithHoverLabel, setShowCodeWithHoverLabel] =
    useState<boolean>(false);

  const ShowExampleWithDefaultProps = () =>
    setShowCodeDefaultRating(!showCodeDefaultRating);

  const ShowExampleWithPrecisionRating = () =>
    setShowCodePrecisionRating(!showCodePrecisionRating);

  const ShowExampleWithHoverLabel = () =>
    setShowCodeWithHoverLabel(!showCodeWithHoverLabel);

  const handleRatingChange = (newValue) => {
    console.log('New rating value:', newValue);
  };

  const componentCode = `import { Rating } from '@ptg-react-libs/rating/rating';`;

  // Note: HTML code for Rating
  const htmlCode = `
  const [defaultPropsRating, setDefaultPropsRating] = useState(2);
  const [defaultRatingZero, setDefaultRatingZero] = useState(0);
    const handleRatingChange = (newValue) => {
    console.log('New rating value:', newValue);
  };
  return(<> 
 //Controlled Rating
  <Rating onChange={setDefaultPropsRating}  value={defaultPropsRating} />
  //Uncontrolled Rating
  <Rating onChange={handleRatingChange}  defaultValue={4} />
  //Read Only
   <Rating onChange={setDefaultPropsRating}  value={defaultPropsRating} readonly={true}/>
   //Disabled
   <Rating onChange={setDefaultPropsRating}  value={defaultPropsRating} disabled={true}/>
   //No Rating
    <Rating onChange={setDefaultRatingZero}  value={defaultRatingZero} />
  </>)
  `;

  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('Basic Rating')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithDefaultProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          {showCodeDefaultRating && (
            <ShowCodeComponent
              componentCode={componentCode}
              htmlCode={htmlCode}
            />
          )}
          <hr className="horizontal-line" />
          <div className="d-flex justify-content-center">
            <b>Controlled</b>
          </div>
          <RatingWithDefaultProps
            setRating={setDefaultPropsRating}
            value={defaultPropsRating}
          />
          <div className="d-flex justify-content-center">
            <b>Uncontrolled</b>
          </div>
          <div className="d-flex justify-content-center">
            <RatingWithDefaultProps
              setRating={handleRatingChange}
              defaultValue={4}
            />
          </div>
          <div className="d-flex justify-content-center">
            <b>Read only</b>
          </div>
          <RatingWithDefaultProps
            setRating={setDefaultPropsRating}
            value={defaultPropsRating}
            readonly={true}
          />
          <div className="d-flex justify-content-center">
            <b>Disabled</b>
          </div>
          <RatingWithDefaultProps
            setRating={setDefaultPropsRating}
            value={defaultPropsRating}
            disabled={true}
          />
          <div className="d-flex justify-content-center">
            <b>No rating given</b>
          </div>
          <RatingWithDefaultProps
            setRating={setDefaultRatingZero}
            value={defaultRatingZero}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('Rating Precision')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithPrecisionRating}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <RatingWithPrecision
            showCodePrecisionRating={showCodePrecisionRating}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('Hover Feedback')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithHoverLabel}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <RatingWithHoverLabel
            showCodeWithHoverLabel={showCodeWithHoverLabel}
          />
        </div>
      </section>
    </div>
  );
};
export default RatingExample;
