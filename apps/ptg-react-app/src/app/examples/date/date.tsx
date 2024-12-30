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
import DateExampleFour from './dateExampleFour';
import CodeIcon from '@mui/icons-material/Code';
import LocalDatetime from './localDateTime';
import { PtgUiMultiSelectbox, PtgUiCalendar, PtguseFetch } from '@ptg-ui/react';

export interface PtgUiDateExampleProps {}

export function PtgUiDateExample(props: PtgUiDateExampleProps) {
  const { t } = useTranslation();

  const [showCodeOne, setShowCodeOne] = useState(false);
  const [showCodeTwo, setShowCodeTwo] = useState(false);
  const [showCodeThree, setShowCodeThree] = useState(false);
  const [showCodeFour, setShowCodeFour] = useState(false);
  const [showCodeLocalDate, setShowCodeLocalDate] = useState(false);

  const [cityList, setCityList] = useState([]);
  const { data: apiData } = PtguseFetch('city-lists') as any;

  useEffect(() => {
    if (apiData[0]) {
      setCityList(apiData[0]?.attributes?.city);
    }
  }, [apiData]);

  const onSelect: any = (event: any) => {
    console.log('Select Values,onSelect', event);
  };
  const onRemove: any = (event: any) => {
    console.log('Values,onRemove', event);
  };

  const ShowExampleCode = () => {
    if (!showCodeOne) {
      setShowCodeOne(true);
    } else {
      setShowCodeOne(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if (!showCodeTwo) {
      setShowCodeTwo(true);
    } else {
      setShowCodeTwo(false);
    }
  };

  const ShowExampleCodeThree = () => {
    if (!showCodeThree) {
      setShowCodeThree(true);
    } else {
      setShowCodeThree(false);
    }
  };

  const ShowExampleCodeFour = () => {
    if (!showCodeFour) {
      setShowCodeFour(true);
    } else {
      setShowCodeFour(false);
    }
  };

  const today = new Date();
  const [date, setStartDate] = useState({
    startDate: null,
    endDate: null,
    errorMsg: false,
  });

  /*-----Set date state-----*/
  const setDateState: any = (d: any, field: string) => {
    setStartDate((preState: any) => {
      if (field === 'endDate' && date && date.startDate && date.startDate > d) {
        date.errorMsg = true;
      } else {
        date.errorMsg = false;
      }
      return {
        ...preState,
        [field]: d,
      };
    });
  };
  /*-----props for start datepicker-----*/
  const startDateProp = {
    selected: date.startDate,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d, 'startDate'),
    startDate: today,
    endDate: null,
    disabled: false,
  };

  /*-----props for end datepicker-----*/
  const endDateProp = {
    selected: date.endDate,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d, 'endDate'),
    endDate: null,
  };

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
              onClick={() => ShowExampleCode()}
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

      {/* <section className="card-section-two pb-5 bg-white rounded pt-2 pb-1 mt-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('CALENDAR_EXAMPLE_4')}</h5>
          </div>

          <div className="col-2">
            <CodeIcon
              onClick={ShowExampleCodeFour}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>
        <DateExampleFour showCodeFour={showCodeFour} />
      </section> */}

      <section className="card-section-two pb-5 bg-white rounded mt-4">
        <div className="row">
          <div className="col-10 mb-2 mt-3">
            <h5 className="example-heading covert-timezone">
              {t('CONVERT_TIMEZONE')}
            </h5>
          </div>

          <div className="col-2 mt-2">
            <CodeIcon
              onClick={() => setShowCodeLocalDate((prev) => !prev)}
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
