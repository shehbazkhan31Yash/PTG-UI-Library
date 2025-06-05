/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 *
 */

import { useState } from 'react';
import './date.scss';
import { PtgUiCalendar } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IDatePickerProps, IExampleThreeProps } from '../../interfaces';
import { END_DATE, START_DATE } from '../../constants/Constant';

export function ExampleThree(props: Readonly<IExampleThreeProps>) {
  const { t } = useTranslation();
  const today = new Date();
  const [date, setStartDate] = useState({
    startDate: null,
    endDate: null,
  });

  /*-----Set date state-----*/
  const setDateState = (date: Date | string, field: string) => {
    setStartDate((preState) => {
      if (field === 'startDate') preState.endDate = null;
      return {
        ...preState,
        [field]: date,
      };
    });
  };
  /*-----props for start datepicker-----*/
  const startDateProp: IDatePickerProps = {
    selected: date.startDate,
    className: `form-control w-100`,
    onChange: (d) => setDateState(d.target.value, START_DATE),
    startDate: today,
    endDate: date.endDate || null,
    disabled: false,
  };

  /*-----props for end datepicker-----*/
  const endDateProp: IDatePickerProps = {
    selected: date.endDate,
    className: `form-control w-100`,
    onChange: (d) => setDateState(d.target.value, END_DATE),
    startDate: date.startDate || today,
    endDate: null,
    disabled: date.startDate === null,
  };

  const htmlCode = `
    // -----------Manage Start Date--------
    <label>Start Date</label>
    <PtgUiCalendar {...startDateProp} />
  
    // -----------Manage End Date --------
    <label>End Date</label>
    <PtgUiCalendar {...endDateProp} /> 
  `;

  const componentCode = `
    import { PtgUiCalendar } from '@ptg-ui/react';

    const today = new Date();
    const [date, setStartDate] = useState({
      startDate: null,
      endDate: null,
    });

    /*-----Set date state-----*/
    const setDateState = (date: Date | string, field: string) => {
      setStartDate((preState) => {
        if (field === 'startDate') preState.endDate = null;
        return {
          ...preState,
          [field]: date,
        };
      });
    };
    /*-----props for start datepicker-----*/
    const startDateProp = {
      selected: date.startDate,
      className: 'form-control w-100',
      onChange: (d: any) => setDateState(d.target.value, 'startDate'),
      startDate: today,
      endDate: date.endDate || null,
      disabled: false,
    };

    /*-----props for end datepicker-----*/
    const endDateProp = {
      selected: date.endDate,
      className: 'form-control w-100',
      onChange: (d: any) => setDateState(d.target.value, 'endDate'),
      startDate: date.startDate || today,
      endDate: null,
      disabled: date.startDate === null,
    };  
  `;

  return (
    <div className="container-fluid">
      {props.showCodeThree && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="mb-2 text-white" id="start-date">
            <label htmlFor="inputDOB">{t('START_DATE_TEXT')}</label>
            {/*-----Usable component datepicker-----*/}
            <PtgUiCalendar {...startDateProp} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
          <div className="mb-2 text-white" id="end-date">
            <label htmlFor="inputDOB">{t('END_DATE_TEXT')}</label>
            {/*-----Usable component datepicker-----*/}
            <PtgUiCalendar {...endDateProp} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleThree;
