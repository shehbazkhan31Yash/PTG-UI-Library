import { useState, useEffect } from 'react';
import { PtgUiCalendar } from '@ptg-ui/react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiSelectbox } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { ITimeZoneProps } from '../../interfaces';
import { LOCAL_TIME, MMMM_D_YYYY_H_MM_AA, TIME_ZONE_LABEL_LONDON, TIME_ZONE_LABEL_NEW_YORK, TIME_ZONE_LONDON, TIME_ZONE_NEW_YORK, YYYY_MM_DD_HH_MM } from '../../constants/Constant';

export const timeZoneList = [
  { value: TIME_ZONE_NEW_YORK, label: TIME_ZONE_LABEL_NEW_YORK, name: TIME_ZONE_NEW_YORK },
  { value: TIME_ZONE_LONDON, label: TIME_ZONE_LABEL_LONDON, name: TIME_ZONE_LONDON },
];
const LocalDatetime = (props: ITimeZoneProps) => {
  const { showCodeLocalDate } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(new Date());
  const [timeZone, setTimeZone] = useState('');
  const [dateTimeUSA, setDateTimeToOtherLocale] = useState<
  Date | null | undefined
  >(new Date());
  const { t } = useTranslation();
  //handle convert tine

  const convertDateTime = (myDate: Date) => {
    const date = new Date(myDate);
    const options = { timeZone: timeZone };
    const locale = LOCAL_TIME;
    const newDate = new Date(date.toLocaleString(locale, options));
    return newDate;
  };
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeZone(event.target.value);
  };
  //Note: get datepicker formate from new Date()
const splitDate = (dateStr: Date | null | undefined) => {
    if(!dateStr){
     return ""
    }
    return new Date(dateStr).toISOString().split(":")[0]+":"+new Date().toISOString().split(":")[1]
  }
  const handleTime = (e:Date|string) => {
    let datePart = convertDateTime(new Date(e));
    datePart = new Date(moment(datePart).format(YYYY_MM_DD_HH_MM));
    setDateTimeToOtherLocale(datePart);
  }

  const startDateProp = {
    selected: splitDate(selectedDate),
    className: 'form-control w-100',
    onChange: (d) => {
      setSelectedDate(d.target.value);
    },
    disabled: false,
    showTimeSelect: true,
    dateFormat: MMMM_D_YYYY_H_MM_AA,
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
      if (selectedDate) {
        handleTime(selectedDate);
      }
    }
  }, [timeZone, selectedDate]);

  const componentCode = `
    import { PtgUiCalendar, PtgUiSelectbox } from '@ptg-ui/react';
    import moment from 'moment';

      const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(new Date());
  const [timeZone, setTimeZone] = useState('');
  const [dateTimeUSA, setDateTimeToOtherLocale] = useState<
  Date | null | undefined
  >(new Date());
  const { t } = useTranslation();
  //handle convert tine

  const convertDateTime = (myDate: Date) => {
    const date = new Date(myDate);
    const options = { timeZone: timeZone };
    const locale = LOCAL_TIME;
    const newDate = new Date(date.toLocaleString(locale, options));
    return newDate;
  };
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeZone(event.target.value);
  };
  //Note: get datepicker formate from new Date()
const splitDate = (dateStr: Date | null | undefined) => {
    if(!dateStr){
     return ""
    }
    return new Date(dateStr).toISOString().split(":")[0]+":"+new Date().toISOString().split(":")[1]
  }
  const handleTime = (e:Date|string) => {
    let datePart = convertDateTime(new Date(e));
    datePart = new Date(moment(datePart).format(YYYY_MM_DD_HH_MM));
    setDateTimeToOtherLocale(datePart);
  });

  const startDateProp = {
    selected: splitDate(selectedDate),
    className: 'form-control w-100',
    onChange: (d) => {
      setSelectedDate(d.target.value);
    },
    disabled: false,
    showTimeSelect: true,
    dateFormat: MMMM_D_YYYY_H_MM_AA,
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
      if (selectedDate) {
        handleTime(selectedDate);
      }
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
