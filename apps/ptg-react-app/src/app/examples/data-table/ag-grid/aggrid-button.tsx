import { ICellRendererParams } from 'ag-grid-community';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import { useTranslation } from 'react-i18next';

export function AggridButton(props: ICellRendererParams) {
  const { t } = useTranslation();
  const buttonClicked = () => {
    alert(`${props.data.athlete}'s row selected`)
  };

  return (
    <div className='mt-1'>
      <PtgButton appearance="primary" text={t('CLICK_HERE')}  onClick={buttonClicked}></PtgButton>
    </div>
  );
};
export default AggridButton;