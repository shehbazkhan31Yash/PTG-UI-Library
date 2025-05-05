/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Indeterminate checkbox example using indeterminate checkbox reusable component
 */

import { useState, useEffect } from 'react';
import style from './indeterminate-checkbox.module.scss';
import { PtgUiIndeterminateCheckbox, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface IndeterminateCheckboxProps {}
type Data = {
  name: string;
  id: number;
  parentId: number;
};
export function IndeterminateCheckbox(_props: IndeterminateCheckboxProps) {
  const [checkBoxData, setCheckBoxData] = useState<Data[]>([]);
  const { data: apiData } = PtguseFetch('checkbox-lists') as any;

  const { t } = useTranslation();

  useEffect(() => {
    if (apiData[0]) {
      setCheckBoxData(apiData[0]?.attributes?.data);
    }
  }, [apiData]);

  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
    
  export const CHECKBOX_DATA  = [
    { "id": 1,"name": "IT","parentId": 0 },
    { "id": 2,"name": "Programming","parentId": 1 },
    { "id": 4, "name": "Frontend", "parentId": 2 },
    { "id": 5, "name": "Angular 1", "parentId": 4 },
    { "id": 6, "name": "Angular 2", "parentId": 4 },
    { "id": 7, "name": "ReactJS", "parentId": 4 },
    { "id": 8, "name": "Backend", "parentId": 2 },
    { "id": 9, "name": "C#", "parentId": 8 },
    { "id": 10, "name": "Java", "parentId": 8 },
    { "id": 11, "name": "Python", "parentId": 8 },
    { "id": 12, "name": "Networking", "parentId": 1 },
    { "id": 13, "name": "Internet", "parentId": 12 },
    { "id": 14, "name": "Security", "parentId": 12 }
  ];
  
    import  style from './indeterminate-checkbox.module.scss';
    import { CHECKBOX_DATA } from '../../mock/mocks';
    import { PtgUiIndeterminateCheckbox } from '@ptg-ui/react';
    
    /* eslint-disable-next-line */
    export interface IndeterminateCheckboxProps {}
    
    export function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
    
    
    export default IndeterminateCheckbox;
  `;

  const htmlCode = `
    <PtgUiIndeterminateCheckbox items={CHECKBOX_DATA} />
  `;
  return (
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="example-heading">{t('INTERMEDIATE_CHECKBOX_TEXT')}</h5>
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

      {!showCode ? (
        <div className="row">
          <div className="checkbox-component col-10 m-3">
            <div className={style['checkbox-list']}>
              {/*-----Usable component PtgUiIndeterminateCheckbox for Indeterminate Checkbox-----*/}
              <PtgUiIndeterminateCheckbox items={checkBoxData} />
            </div>
          </div>
        </div>
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </section>
  );
}

export default IndeterminateCheckbox;
