/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { PtgUiMaterialTable, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
const [gridData, setGridData] = useState([]);
const [showCode, setShowCode] = useState(false);
const { data:apiData } = PtguseFetch('table-lists') as any

useEffect(() => {
  if(apiData[0]){
    setGridData(apiData[0]?.attributes?.grid)
  }
},[apiData])
  
const ShowExampleCode = () => {
  if(!showCode){
    setShowCode(true);
  }
  else{
    setShowCode(false);
  }
};

  const Columns = [
    { title: "Athlete",field: "athlete" ,width:"20%"},
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
 
import { PtgUiMaterialTable } from '@ptg-ui/react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { useEffect, useState } from 'react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
  const [gridData, setGridData] = useState([]);
  const {data:apiData, isLoading, error} = PtguseFetch('http://localhost:1337/api/table-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return{
        id:item.id,
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
// useEffect(() => {
//   authClass
//     .gridData()
//     .then((res: any) => {
//       setGridData(res.data);
//     })
//     .catch((err: any) => console.log(err));
// }, []);
  const Columns = [
    { title: "Athlete",field: "athlete" ,width:"20%"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ];
export default PtgUiMaterialTableExample;`

const htmlCode = `
  <PtgUiMaterialTable 
  data ={gridData}
  columns= {Columns}  
  filtering= {true}
  paging= {true}
  paginationPosition={'bottom'}
  grouping={true}
  />
`
  
  return (
    <div>
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
    <div className='row'>
    <div className = 'col-10'>
      <h5 className='example-heading mt-2'>Material Table</h5>
    </div>
    <div className='col-2 mr-5 mt-1 mb-2'>
      <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
    </div>
    <hr className='horizontal-line'/>
    </div>
    
    {!showCode ? (
      <div className="table-responsive">
      <PtgUiMaterialTable 
        data ={gridData}
        columns= {Columns}  
        filtering= {true}
        paging= {true}
        paginationPosition={'bottom'}
        grouping={true}
        title=""
      />
      </div>
    ): (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </section>
    </div>
  );
}

export default PtgUiMaterialTableExample;
