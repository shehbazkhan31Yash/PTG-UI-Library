/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { useEffect, useState } from 'react';
import { PtguseFetch } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import MaterialTable from '@material-table/core';


/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(_props: PtgUiMaterialTableButtonExampleProps) {
  const { t } = useTranslation();
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
  const {data:apiData} = PtguseFetch('table-lists') as any

  useEffect(() => {
    if(apiData[0]){
      setGridData(apiData[0]?.attributes?.grid)
    }
  },[apiData])

  
  const Columns:any = [
    { title: "Athlete",field: "athlete"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ]; 

  const componentCode = `
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import MaterialTable from "@material-table/core";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(props: PtgUiMaterialTableButtonExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  const {data:apiData, isLoading, error} = PtguseFetch('http://localhost:1337/api/table-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return{
          age: item.attributes.age,
          athlete:item.attributes.athlete,
          country:item.attributes.country,
          date:item.attributes.date,
          gold:item.attributes.gold,
          silver:item.attributes.silver,
          sport:item.attributes.sport,
          total:item.attributes.total,
          year:item.attributes.year,
        }
     })
     setGridData(data)
    }
  useEffect(()=>{
    fetchApi()
  },[apiData])
 
  const tableOptions ={
    emptyRowsWhenPaging: false,
    defaultOrderByCollection: []
  }

  const Columns:any = [
    { title: "Athlete",field: "athlete"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ]; 
 export default PtgUiMaterialTableButtonExample;
`

const htmlCode = `
<MaterialTable
columns={Columns}
data={gridData}
title="Material Table"
options={tableOptions}
actions={[
    {
      icon: () =>  <PtgUiButton
                    className="btn-sm">
                    {t('CLICK_HERE')}
                    </PtgUiButton>,
          tooltip: 'Click Here',
          onClick: (event: any, rowData: any) => {
          console.log(event, rowData);
          alert("Button Clicked");
      }
    }
  ]}
/>
`
const tableOptions ={
  emptyRowsWhenPaging: false,
  defaultOrderByCollection: []
}

  return (
    <div className="table-responsive">
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
    <div className='row'>
    <div className = 'col-10'>
      <h5 className='example-heading mt-2'>Material Table with Button</h5>
    </div>
    <div className='col-2 mr-5 mt-1 mb-2'>
      <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
    </div>
    <hr className='horizontal-line'/>
    </div>

    {!showCode ? (
       <MaterialTable
       columns={Columns}
       data={gridData}
       options={tableOptions}
       title=""
       style={{
        fontSize: "14px"
       }}
       actions={[
           {
             icon: () =>   
                <PtgButton appearance="primary" text={t('CLICK_HERE')}></PtgButton>,
                 tooltip: 'Click Here',
                 onClick: (event: any, rowData: any) => {
                 console.log(event, rowData);
                 alert("Button Clicked");
                //  style={{width : "100px"}}
              }
           }
         ]}
       />
    ):(
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </section>
  </div>
  );
}

export default PtgUiMaterialTableButtonExample;
