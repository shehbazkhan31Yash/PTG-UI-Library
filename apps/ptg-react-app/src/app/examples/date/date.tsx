/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 *
 */

import './date.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import DateExampleOne from './dateExampleOne';
import DateExampleTwo from './dateExampleTwo';
import DateExampleThree from './dateExampleThree';
import CodeIcon from '@mui/icons-material/Code';
import LocalDatetime from './localDateTime';

export function PtgUiDateExample() {
  const { t } = useTranslation();

  const [showCodeOne, setShowCodeOne] = useState<boolean>(false);
  const [showCodeTwo, setShowCodeTwo] = useState<boolean>(false);
  const [showCodeThree, setShowCodeThree] = useState<boolean>(false);
  const [showCodeLocalDate, setShowCodeLocalDate] = useState<boolean>(false);

  const ShowExampleCode = () => setShowCodeOne((prev) => !prev);
  const ShowExampleCodeTwo = () => setShowCodeTwo((prev) => !prev);
  const ShowExampleCodeThree = () => setShowCodeThree((prev) => !prev);
  const showCodeLocalDateTime = () => setShowCodeLocalDate((prev) => !prev);

  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-1 pr-3 mt-2">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading calender-heading">
              {t('CALENDAR_EXAMPLE_1')}
            </h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={ShowExampleCode}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>

        <DateExampleOne showCodeOne={showCodeOne} />
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-1 mt-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('CALENDAR_EXAMPLE_2')}</h5>
          </div>

          <div className="col-2">
            <CodeIcon
              onClick={ShowExampleCodeTwo}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>
        <DateExampleTwo showCodeTwo={showCodeTwo} />
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-1 mt-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('CALENDAR_EXAMPLE_3')}</h5>
          </div>

          <div className="col-2">
            <CodeIcon
              onClick={ShowExampleCodeThree}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>
        <DateExampleThree showCodeThree={showCodeThree} />
      </section>
      <section className="card-section-two pb-5 bg-white rounded mt-4">
        <div className="row">
          <div className="col-10 mb-2 mt-3">
            <h5 className="example-heading covert-timezone">
              {t('CONVERT_TIMEZONE')}
            </h5>
          </div>

          <div className="col-2 mt-2">
            <CodeIcon
              onClick={showCodeLocalDateTime}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>
        <LocalDatetime showCodeLocalDate={showCodeLocalDate} />
      </section>
    </div>
  );
}

export default PtgUiDateExample;
