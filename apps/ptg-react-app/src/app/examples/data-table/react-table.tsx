/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 *
 */
import React, { useEffect, useState } from 'react';
import './data-table.scss';
import { PtgUiReactTable, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface PtgUiReactTableExampleProps {}

export function PtgUiReactTableExample(props: PtgUiReactTableExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };
  useEffect(() => {
    authClass
      .gridData()
      .then((res: any) => {
        setGridData(res.data);
        console.log(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);
  const { data: apiData } = PtguseFetch('table-lists') as any;
  useEffect(() => {
    if (apiData[0]) {
      setGridData(apiData[0]?.attributes?.grid);
    }
  }, [apiData]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Athlete',
        accessor: 'athlete',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Sport',
        accessor: 'sport',
      },
      {
        Header: 'Gold',
        accessor: 'gold',
      },
      {
        Header: 'Silver',
        accessor: 'silver',
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
    ],
    []
  );

  const componentCode = `
import React, { useEffect, useState } from 'react';
import { PtgUiReactTable } from '@ptg-ui/react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { useTranslation } from 'react-i18next';
import { authClass } from '@ptg-react-app/auth/services/auth.service';

export interface PtgUiReactTableExampleProps {}

export function PtgUiReactTableExample(props: PtgUiReactTableExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    if(apiData[0]){
      setGridData(apiData[0]?.attributes?.grid)
    }
  },[apiData])

  // useEffect(() => {
  //   authClass
  //     .gridData()
  //     .then((res: any) => {setGridData(res.data);console.log(res.data)})
  //     .catch((err: any) => console.log(err));
  // }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Athlete',
        accessor: 'athlete',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Sport',
        accessor: 'sport',
      },
      {
        Header: 'Gold',
        accessor: 'gold',
      },
      {
        Header: 'Silver',
        accessor: 'silver',
      },
      {
        Header: 'Total',
        accessor: 'total',
      }
    ],
    []);
  export default PtgUiReactTableExample;`;

  const htmlCode = `
    <PtgUiReactTable 
      columns={columns} 
      data={gridData} 
    />
  `;
  return (
    <div className="w-100">
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
        <div className="row">
          <div className="col-10 mb-2 mt-1">
            <h5 className="example-heading">{t('REACT_TABLE')}</h5>
          </div>
          <div className="col-2 mr-2">
            <CodeIcon
              onClick={ShowExampleCode}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>
        {!showCode ? (
          <div className="m-4 react-table-component">
            <PtgUiReactTable columns={columns} data={gridData} />
          </div>
        ) : (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
      </section>
    </div>
  );
}

export default PtgUiReactTableExample;
