import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { ITableWithDefaultProps } from '@ptg-react-app/interfaces';
import { PtgUiTable } from '@ptg-react-libs/data-table/table/Table';
import './table.css';

export const TableWithDefaultProps = (props: ITableWithDefaultProps) => {
  const columns = [
    { Header: 'ID', accessor: 'personID', isNumeric: true },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age', isNumeric: true },
    { Header: 'Email', accessor: 'email' },
  ];

  const data = [
    { personID: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    {
      personID: 2,
      name: 'Jane Smith',
      age: 34,
      email: 'jane@example.com',
    },
    {
      personID: 3,
      name: 'Alice Johnson',
      age: 25,
      email: 'alice@example.com',
    },
    { personID: 4, name: 'Bob Brown', age: 45, email: 'bob@example.com' },
  ];
  const componentCode = `
  import { PtgUiTable } from '@ptg-react-libs/data-table/table/Table';
   const columns = [
    { Header: 'ID', accessor: 'personID', isNumeric: true },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age', isNumeric: true },
    { Header: 'Email', accessor: 'email' },
  ];

  const data = [
    { personID: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    {
      personID: 2,
      name: 'Jane Smith',
      age: 34,
      email: 'jane@example.com',
    },
    {
      personID: 3,
      name: 'Alice Johnson',
      age: 25,
      email: 'alice@example.com',
    },
    { personID: 4, name: 'Bob Brown', age: 45, email: 'bob@example.com' },
  ];
  `;

  // Note: HTML code for Rating
  const htmlCode = `
 <PtgUiTable columns={columns} data={data} />
  `;

  return (
    <section>
      {props?.showCodeWithDefaultProps && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <PtgUiTable columns={columns} data={data} />
      </div>
    </section>
  );
};
