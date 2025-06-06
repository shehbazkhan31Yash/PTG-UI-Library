import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiDatePicker } from '@ptg-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './datePicker.css';

export default function DatePicker() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const { t } = useTranslation();
  const [date, setDate] = useState('');
  // Note: handle toggle to show/hide code
  const handleShowCode = () => {
    setShowCode(!showCode);
  };
  const dateChange = (val: string) => {
    setDate(val);
  };
  const componentCode = `
    import { PtgUiDatePicker } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    const [date, setDate] = useState('');
    const dateChange = (val: string) => {
        setDate(val);
    };
  `;
  const htmlCode = `<PtgUiDatePicker sendSelectedDate={dateChange} />`;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="font-weight-bold example-heading">
            {t('DATEPICKER')}
          </h5>
        </div>
        <div className="col-2">
          <CodeIcon
            onClick={handleShowCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-2 mt-2 ">
            <PtgUiDatePicker value={date} sendSelectedDate={dateChange} />
          </div>
        </div>
      </div>
    </section>
  );
}
