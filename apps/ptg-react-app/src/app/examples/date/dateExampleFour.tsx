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

export interface DateExampleFourProps {
  showCodeFour: boolean;
}

export function DateExampleFour(props: DateExampleFourProps) {
  const { t } = useTranslation();
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
    endDate: null,
  };

  const componentCode = `
    import DatePicker from 'react-datepicker';
 
    export function DateExampleFour(props: DateExampleFourProps) {

    const today = new Date();
    const [date, setStartDate] = useState({
        startDate: null,
        endDate: null,
        errorMsg:false,
    });

  
    const setDateState: any = (d: any, field: string) => {
        setStartDate((preState: any) => {
            if (field === 'endDate' && date && date.startDate && date.startDate > d) {
                  date.errorMsg = true
            } else {
                date.errorMsg = false
            }
            return {
                ...preState,
                [field]: d
            }
        });
    }
    
    const startDateProp = {
        selected: date.startDate,
        className: "form-control w-100",
        onChange: (d: any) => setDateState(d, 'startDate'),
        startDate: today,
        endDate: null,
        disabled: false,
    }

    const endDateProp = {
        selected: date.endDate,
        className: "form-control w-100",
        onChange: (d: any) => setDateState(d, 'endDate'),
        endDate: null,
    }
    }

    export default DateExampleFour;`;

  const htmlCode = `
    <DatePicker
      disabled={disabled}
      selected={selected}
      className={className}
      dateFormat="MM-dd-yyyy"
      placeholderText="MM-DD-YYYY"
      onChange={onChange}
      maxDate={endDate === null ? endDate : new Date(endDate)}
      onKeyDown={onKeyDown}
      isClearable
    />
    { date.errorMsg && <p>DATE_ERROR_TEXT</p>}`;

  return (
    <div className="container-fluid">
      {!props.showCodeFour ? (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group" id="start-date">
              <label htmlFor="inputDOB">{t('START_DATE_TEXT')}</label>
              {/*-----Usable component datepicker-----*/}
              <PtgUiCalendar {...startDateProp} />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group" id="end-date">
              <label htmlFor="inputDOB">{t('END_DATE_TEXT')}</label>
              {/*-----Usable component datepicker-----*/}
              <PtgUiCalendar {...endDateProp} />
              {date.errorMsg && (
                <p className="text-danger">{t('DATE_ERROR_TEXT')}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </div>
  );
}

export default DateExampleFour;
