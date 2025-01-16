import { useState, useEffect } from 'react';
import { PtgUiCalendar } from '@ptg-ui/react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiSelectbox } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
export interface ExampleOneProps {
  showCodeLocalDate: boolean;
}
export const timeZoneList = [
  { value: 'America/New_York', label: 'New York', name: 'America/New_York' },
  { value: 'Europe/London', label: 'London', name: 'Europe/London' },
];
const LocalDatetime = (props: ExampleOneProps) => {
  const { showCodeLocalDate } = props;
  const [selectedDate, setSlectedDate] = useState< Date  | string>(new Date());
  const [timeZone, setTimeZone] = useState('');
  const [dateTimeUSA, setDateTimeToOtherLocale] = useState<
    Date| string
  >(new Date());
  const { t } = useTranslation();
  //handle convert tine

  const convertDateTime = (myDate: Date) => {
    const date = new Date(myDate);
    const options = { timeZone: timeZone };
    const locale = 'en-US';
    const newDate = new Date(date.toLocaleString(locale, options));
    return newDate;
  };
  const onSelect: any = (event: any) => {
    setTimeZone(event.target.value);
  };
  //Note: get datepicker formate from new Date()
const splitDate = (dateStr: Date | string) => new Date(dateStr).toISOString().split(":")[0]+":"+new Date().toISOString().split(":")[1]
  const handleTime = (e: any) => {
    let datePart: any = convertDateTime(new Date(e));
    datePart = moment(datePart).format('YYYY-MM-DD HH:mm');
    setDateTimeToOtherLocale(datePart);
  };

  const startDateProp = {
    selected: splitDate(selectedDate),
    className: 'form-control w-100',
    onChange: (d: any) => {
      setSlectedDate(d.target.value);
    },
    disabled: false,
    showTimeSelect: true,
    dateFormat: 'MMMM d, yyyy h:mm aa',
    isDateTime: true,
  };

  const startDatePropLocal = {
    selected: splitDate(dateTimeUSA),
    className: 'form-control w-100',
    disabled: false,
    showTimeSelect: true,
    isDateTime: true,
  };
  useEffect(() => {
    if (timeZone) {
      handleTime(selectedDate);
    }
  }, [timeZone, selectedDate]);

  const componentCode = `
    import { PtgUiCalendar, PtgUiSelectbox } from '@ptg-ui/react';
    import moment from 'moment';

    const [selectedDate, setSlectedDate] = useState(new Date());
    const [timeZone, setTimeZone] = useState('');
    const [dateTimeUSA, setDateTimeToOtherLocale] = useState<Date | null | undefined>(new Date());

    const convertDateTime = (myDate: Date) => {
      const date = new Date(myDate);
      const options = { timeZone: timeZone };
      const locale = 'en-US';
      const newDate = new Date(date.toLocaleString(locale, options));
      return newDate;
    };

    const onSelect: any = (event: any) => {
      setTimeZone(event[0].value);
    };

    const handleTime = (e: any) => {
      let datePart: any = convertDateTime(new Date(e));
      datePart = moment(datePart).format('YYYY-MM-DD HH:mm');
      setDateTimeToOtherLocale(datePart);
    };

    const startDateProp = {
      selected: selectedDate,
      className: 'form-control w-100',
      onChange: (d: any) => {
        setSlectedDate(d.target.value);
      },
      disabled: false,
      showTimeSelect: true,
      isDateTime: true,
    };

    const startDatePropLocal = {
      selected: dateTimeUSA,
      className: 'form-control w-100',
      disabled: false,
      showTimeSelect: true,
      dateFormat: 'MMMM d, yyyy h:mm aa',
      isDateTime: true,
    };

    useEffect(() => {
      if (timeZone) {
        handleTime(selectedDate);
      }
    }, [timeZone, selectedDate]);
  `;

  const htmlCode = `
    <label>en-US time zone</label>
    <PtgUiCalendar {...startDateProp} />
  
    <label>Timezone</label>
    <PtgUiSelectbox
      name="time"
      list={timeZoneList}
      onSelect={onSelect}
      singleSelect={true}
      className="single-select-field"
      placeholder={'Select Time Zone'}
      width="100%"
    />
  
    <label>Converted timezone</label>
    <PtgUiCalendar {...startDatePropLocal} />
        
  `;
  return (
    <>
      {showCodeLocalDate && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}

      <div className="container-fuild">
        <div className="row ms-1 me-1">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>en-US time zone</label>
            <PtgUiCalendar {...startDateProp} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>Timezone</label>
            <PtgUiSelectbox
              name="time"
              list={timeZoneList}
              onSelect={onSelect}
              singleSelect={true}
              className="single-select-field"
              placeholder={t('SELECT_PLACEHOLDER')}
              width="100%"
            />
          </div>
        </div>
        <div className="row mt-2 ms-1 me-1">
          <div className="col-md-6 col-lg-6">
            <label>Converted timezone</label>
            <PtgUiCalendar {...startDatePropLocal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalDatetime;
