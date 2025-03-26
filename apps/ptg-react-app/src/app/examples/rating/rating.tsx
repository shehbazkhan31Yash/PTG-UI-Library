import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import { RatingWithDefaultProps } from './RatingWithDefaultProps';
import './rating.css';

const RatingExample = () => {
  const { t } = useTranslation();
  const [defaultPropsRating, setDefaultPropsRating] = useState(2);
  const [showCodeDefaultRating, setShowCodeDefaultRating] =
    useState<boolean>(false);

  const ShowExampleWithDefaultProps = () =>
    setShowCodeDefaultRating(!showCodeDefaultRating);

  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('Rating with Default Property')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithDefaultProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <RatingWithDefaultProps
            showCodeDefaultRating={showCodeDefaultRating}
            setRating={setDefaultPropsRating}
            value={defaultPropsRating}
          />
        </div>
      </section>
    </div>
  );
};
export default RatingExample;
