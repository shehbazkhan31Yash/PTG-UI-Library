/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 *
*/
import { useEffect, useState } from 'react';
import './data-table.scss';
import { PtgUiReactDataGrid, PtguseFetch } from '@ptg-ui/react';
import { PtgUiButton } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface PtgUiReactDataGridExampleProps {}
 
export function PtgUiReactDataGridExample(_props: PtgUiReactDataGridExampleProps) {
  const { t } = useTranslation();
  /* istanbul ignore next */
  const onClick = (_event: any) => {
      alert("Button Clicked")
  }
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };
 
  const { data: apiData } = PtguseFetch('table-lists') as any

  useEffect(() => {
    if(apiData[0]?.attributes?.grid){
      setGridData(apiData[0]?.attributes?.grid)
    }
  },[apiData])
  const columns = [
    { name: 'athlete', header: 'Athlete', width: 200 },
    { name: 'age', header: 'Age',  width: 100 },
    { name: 'country', header: 'Country',  width: 150},
    { name: 'date', header: 'Date', width: 100},
    { name: 'sport', header: 'Sport',width: 200},
    { name: 'gold', header: 'Gold', width: 100},
    { name: 'silver', header: 'Silver',width: 100},
    { name: 'total', header: 'Total',width: 100 },
    { name: '', header: '', width: 100,
    render: ()=><PtgUiButton onClick={onClick} className="btn-sm">{t('CLICK_HERE')}</PtgUiButton>
  },
  ]
  const filterValue = [
    { name: 'athlete', operator: 'startsWith', type: 'string', value: '' },
    { name: 'age', operator: 'gte', type: 'number', value: '' },
    { name: 'country', operator: 'startsWith', type: 'string', value: '' },
  ];
 
  const componentCode = `
    import {useEffect, useState} from 'react';
    import { PtgUiReactDataGrid } from '@ptg-ui/react';
    import { PtgUiButton } from '@ptg-ui/react';
    import { GRID_Data } from '@ptg-react-app/mock/grid-data';
    import { authClass } from '@ptg-react-app/auth/services/auth.service';
    
    export interface PtgUiReactDataGridExampleProps {}
    
    export function PtgUiReactDataGridExample(props: PtgUiReactDataGridExampleProps) {
    
      /* istanbul ignore next */
      const onClick = (event: any) => {
          alert("Button Clicked")
      }
      const [gridData, setGridData] = useState([]);
      useEffect(() => {
        authClass
          .gridData()
          .then((res: any) => {
            setGridData(res.data);
          })
          .catch((err: any) => console.log(err));
      }, []);
      const columns = [
        { name: 'athlete', header: 'Athlete', width: 200 },
        { name: 'age', header: 'Age',  width: 100 },
        { name: 'country', header: 'Country',  width: 150},
        { name: 'date', header: 'Date', width: 100},
        { name: 'sport', header: 'Sport',width: 200},
        { name: 'gold', header: 'Gold', width: 100},
        { name: 'silver', header: 'Silver',width: 100},
        { name: 'total', header: 'Total',width: 100 },
        { name: '', header: '', width: 100,
        render: ({})=><PtgUiButton onClick={onClick} className="btn-sm">CLICK_HERE</PtgUiButton>
      },
      ]
      const filterValue = [
        { name: 'athlete', operator: 'startsWith', type: 'string', value: '' },
        { name: 'age', operator: 'gte', type: 'number', value: '' },
        { name: 'country', operator: 'startsWith', type: 'string', value: '' },
      ];
      export default PtgUiReactDataGridExample;
  `

  const htmlCode = `
    <PtgUiReactDataGrid
    data={[...gridData]}
    columns={columns}
    filterValue={filterValue}
    minHeight={550}
    idProperty="id"
    pagination={true}
    nativeScroll={false}
    editable={true}
  />
`

  return (
    <div className="w-100">
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
       <div className="row">
        <div className="col-10 mb-2">
           <h4>{t('REACT_DATA_GRID')}</h4>
        </div>
        <div className='col-2 mr-3'>
          <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
        </div>
        <hr className='horizontal-line'/>
      </div>
      {!showCode ? (
        <PtgUiReactDataGrid
        data={[...gridData]}
        columns={columns}
        filterValue={filterValue}
        minHeight={550}
        idProperty="id"
        pagination={true}
        nativeScroll={false}
        editable={true}
         />
      ):(
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      </section>
    </div>
  );
}
 
export default PtgUiReactDataGridExample;
 