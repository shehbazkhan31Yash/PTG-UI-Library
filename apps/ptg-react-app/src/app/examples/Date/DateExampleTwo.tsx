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

export interface ExampleTwoProps {
  showCodeTwo: boolean;
}

export function ExampleTwo(props: ExampleTwoProps) {
  const { t } = useTranslation();
  const today = new Date();
  const [date, setStartDate] = useState({
    startDate: null,
    endDate: null,
    dateRange: null,
    errorMsg: false,
  });

  /*-----Set date state-----*/
  const setDateState: any = (d: any, field: string) => {
    setStartDate((preState: any) => {
      if (
        field === 'dateRange' &&
        date &&
        date.startDate &&
        date.endDate &&
        (d < date.startDate || d > date.endDate)
      ) {
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
    onChange: (d: any) => setDateState(d.target.value, 'startDate'),
    startDate: today,
    endDate: null,
    disabled: false,
  };

  /*-----props for end datepicker-----*/
  const endDateProp = {
    selected: date.endDate,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d.target.value, 'endDate'),
    startDate: date.startDate || today,
    endDate: null,
    disabled: date.startDate === null,
  };

  /*-----props for date range picker-----*/
  const dateRangeProp = {
    selected: date.dateRange,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d.target.value, 'dateRange'),
    disabled: date.startDate === null || date.endDate === null,
    // startDate: date.startDate,
    // endDate: date.endDate,
  };

  const componentCode = `
      import {PtgUiCalendar} from '@ptg-ui/react';

      const today = new Date();
      const [date, setStartDate] = useState({
        startDate: null,
        endDate: null,
        dateRange: null,
        errorMsg: false,
      });

      /*-----Set date state-----*/
      const setDateState: any = (d: any, field: string) => {
        setStartDate((preState: any) => {
          if (
            field === 'dateRange' &&
            date &&
            date.startDate &&
            date.endDate &&
            (d < date.startDate || d > date.endDate)
          ) {
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
        className: 'form-control w-100',
        onChange: (d: any) => setDateState(d.target.value, 'startDate'),
        startDate: today,
        endDate: null,
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

      /*-----props for date range picker-----*/
      const dateRangeProp = {
        selected: date.dateRange,
        className: 'form-control w-100',
        onChange: (d: any) => setDateState(d.target.value, 'dateRange'),
        // startDate: date.startDate,
        // endDate: date.endDate,
      };
    
   `;

  const htmlCode = `
    // -----------Manage Start Date--------
    <label>Start Date</label>
    <PtgUiCalendar {...startDateProp} />
  
    // -----------Manage End Date--------
    <label>End Date</label>
    <PtgUiCalendar {...endDateProp} />
  
    // -----------Manage Date Range With Validation--------
    <label>Date Range</label>
    <PtgUiCalendar {...dateRangeProp} /> 
   `;

  return (
    <section>
      {props.showCodeTwo && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row mb-3">
              <div className="col-12">
                <label>{t('MIN_DATE')}</label>
              </div>
              <div className="col-12" id="start-date">
                <PtgUiCalendar {...startDateProp} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>{t('MAX_DATE')}</label>
              </div>
              <div className="col-12" id="end-date">
                <PtgUiCalendar {...endDateProp} />
              </div>
            </div>
          </div>
          <div className="cal-heading col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>{t('DATE_VALIDATOR_TEXT')}</label>
            <div className="row mb-3">
              <div
                className="calender-component col-lg-12 col-md-12 col-sm-12 col-xs-12"
                id="date-range-two"
              >
                <PtgUiCalendar {...dateRangeProp} />
                {date.errorMsg && (
                  <p className="text-danger">{t('DATE_VALIDATOR_TEXT')}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleTwo;
