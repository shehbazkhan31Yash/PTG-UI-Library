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
import {IDatePickerProps, IDateState, IExampleOneProps } from '../../interfaces';
import { DATE_RANGE, END_DATE, START_DATE } from '@ptg-react-app/constants/Constant';


export function ExampleOne(props: IExampleOneProps) {
  const { t } = useTranslation();
  const today = new Date();
  const [date, setStartDate] = useState<IDateState>({
    startDate: null,
    endDate: null,
    dateRange: null,
  });

  /*-----Set date state-----*/
  const setDateState = (date: Date | string, field: string) => {
    setStartDate((preState) => {
      if (field === START_DATE) preState.endDate = null;
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
    endDate: null,
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

  /*-----props for date range picker-----*/
  const dateRangeProp: IDatePickerProps = {
    selected: date.dateRange,
    className: `form-control w-100`,
    onChange: (d) => setDateState(d.target.value, DATE_RANGE),
    startDate: date.startDate ? date.startDate : '',
    endDate: date.endDate ? date.endDate : null,
    disabled: date.startDate === null,
  };

  const componentCode = `
    import { PtgUiCalendar } from '@ptg-ui/react';

    const today = new Date();
    const [date, setStartDate] = useState({
      startDate: null,
      endDate: null,
      dateRange: null,
    });

    /*-----Set date state-----*/
    const setDateState = (date: Date | string, field: string) => {
      setStartDate((preState) => {
        if (field === START_DATE) preState.endDate = null;
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
      startDate: date.startDate,
      endDate: date.endDate,
      disabled: date.startDate === null,
    };`;

  const htmlCode = `
    // -----------Manage Start Date--------
    <label>Start Date</label>
    <PtgUiCalendar {...startDateProp} />

    // -----------Manage End Date--------
    <label>End Date</label>
    <PtgUiCalendar {...endDateProp} />

    // -----------Manage Date Range--------
    <label>Date Range</label>
    <PtgUiCalendar {...dateRangeProp} />
  `;

  return (
    <section>
      {props.showCodeOne && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}

      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row mb-3">
              <div className="col-12">
                <label>{t('MIN_DATE')}</label>
              </div>
              <div className="col-12" id="sdo">
                <PtgUiCalendar {...startDateProp} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>{t('MAX_DATE')}</label>
              </div>
              <div className="col-12" id="edo">
                <PtgUiCalendar {...endDateProp} />
              </div>
            </div>
          </div>

          <div className="cal-heading col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>{t('DATE_VALIDATOR_TEXT')}</label>
            <div className="row mb-3">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                id="react-datepicker_star-end"
              >
                <PtgUiCalendar {...dateRangeProp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleOne;
