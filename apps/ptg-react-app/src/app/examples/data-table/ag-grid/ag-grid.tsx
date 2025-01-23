/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using AG Grid as reusable component.
 * 
*/

import '../data-table.scss';

import { PtgUiAccordion, PtgUiAgGrid, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useMemo, useState } from 'react';

import { AggridButton } from './aggrid-button';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface PtgUiAgGridExampleProps {}

export function PtgUiAgGridExample(props: PtgUiAgGridExampleProps) {
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
  useEffect(() => {
    authClass
      .gridData()
      .then((res: any) => {
        setGridData(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  const {data:apiData} = PtguseFetch('table-lists') as any
  
  const { t } = useTranslation();
  
  useEffect(() => {
    if(apiData[0]){
      setGridData(apiData[0]?.attributes?.grid)
    }
  },[apiData])

  const autoGroupColumnDef = useMemo(() => ({
    field: "athlete", 
    cellRendererParams: {
      checkbox: true
    }
  }), []);
  const [columnDefs, setColumnDefs] = useState([
    { 
      field: "athlete", checkboxSelection: true,
      headerCheckboxSelection: true, 
      floatingFilter: true,
      minWidth: 150 ,
      pinned: 'left',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200
      }},
    { field: "age", minWidth: 50 },
    { field: "country", minWidth: 100 },
    { field: "year", minWidth: 100 },
    { field: "date", minWidth: 100 },
    { field: "sport", minWidth: 150 },
    { field: "gold", minWidth: 50 },
    { field: "silver", minWidth: 50},
    { field: "total", minWidth: 50},
    { field: "Action",cellRenderer: AggridButton,minWidth: 130},
  ]);

  const defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    flex:1,
    editable: false,
  }

  const accordian_array:any = [{
    title: t('AG_GRID_ACCORDION'),
    content:   <PtgUiAgGrid
                  data={gridData}
                  autoGroupColumnDef={autoGroupColumnDef}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  rowSelection="multiple"
                  groupSelectsChildren={true}
                  pagination={true}
                  paginationPageSize={8}
                  customPagination={false}
                />
  }]

  const componentCode = `
    import { PtgUiAgGrid, PtgUiAccordian } from '@ptg-ui/react';
    import { useEffect, useMemo, useState } from 'react';
    import { GRID_Data } from '@ptg-react-app/mock/grid-data';
    import { AggridButton } from './aggrid-button';
    import { authClass } from '@ptg-react-app/auth/services/auth.service';
    
    export interface PtgUiAgGridExampleProps {}
    
    export function PtgUiAgGridExample(props: PtgUiAgGridExampleProps) {
      const [gridData, setGridData] = useState([]);
      useEffect(() => {
        authClass
          .gridData()
          .then((res: any) => {
            setGridData(res.data);
          })
          .catch((err: any) => console.log(err));
      }, []);
    
      const autoGroupColumnDef = useMemo(() => ({
        field: "athlete", 
        cellRendererParams: {
          checkbox: true
        }
      }), []);
      const [columnDefs, setColumnDefs] = useState([
        { 
          field: "athlete", checkboxSelection: true,
          headerCheckboxSelection: true, 
          floatingFilter: true,
          minWidth: 150 ,
          pinned: 'left',
          filterParams: {
            buttons: ['reset', 'apply'],
            debounceMs: 200
          }},
        { field: "age", minWidth: 50 },
        { field: "country", minWidth: 100 },
        { field: "year", minWidth: 100 },
        { field: "date", minWidth: 100 },
        { field: "sport", minWidth: 150 },
        { field: "gold", minWidth: 50 },
        { field: "silver", minWidth: 50},
        { field: "total", minWidth: 50},
        { field: "Action",cellRenderer: AggridButton,minWidth: 100},
      ]);
    
      const defaultColDef = {
        sortable: true,
        resizable: true,
        filter: true,
        flex:1,
        editable: false,
      }
    
      const accordian_array:any = [{
        title: t('AG_GRID_ACCORDION'),
        content:   <PtgUiAgGrid
                      data={gridData}
                      autoGroupColumnDef={autoGroupColumnDef}
                      columnDefs={columnDefs}
                      defaultColDef={defaultColDef}
                      rowSelection="multiple"
                      groupSelectsChildren={true}
                      pagination={true}
                      paginationPageSize={8}
                      customPagination={false}
                    />
      }]
  `
  const htmlCode = `
    <PtgUiAgGrid
    data={gridData}
    autoGroupColumnDef={autoGroupColumnDef}
    columnDefs={columnDefs}
    defaultColDef={defaultColDef}
    rowSelection="multiple"
    groupSelectsChildren={true}
    pagination={true}
    paginationPageSize={8}
    customPagination={true}
  />
  <PtgUiAccordion stories={accordian_array}/>
  `

  return (
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
      <div className="row">
        <div className="col-10 mb-2 mt-1">
          <h5 className='example-heading'>{t('AG_GRID_DATATABLE')}</h5>
        </div>
        <div className='col-2 mr-3'>
          <CodeIcon onClick={ShowExampleCode} fontSize="large"  className='show-code-icon'></CodeIcon>
        </div>
        <hr className='horizontal-line'/>
      </div>
      {!showCode ? (
          <>
          <div className='m-4'>
          <PtgUiAgGrid
          data={gridData}
          autoGroupColumnDef={autoGroupColumnDef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          groupSelectsChildren={true}
          pagination={true}
          paginationPageSize={8}
          customPagination={true}
          />
          </div>
          {/* <h5 className='ms-4'>{t('DATATABLE_WITH_ACCORDIAN')}</h5>
          <div className='me-4 ms-4'>
          <PtgUiAccordion stories={accordian_array}/> */}
          {/* </div> */}
        </>
      ):(
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </section>
  );
}

export default PtgUiAgGridExample;
