import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { ITableWithServerSidePagination } from '@ptg-react-app/interfaces';
import { PtgUiTable } from '@ptg-react-libs/data-table/table/Table';
import './table.css';
import { PtgUiPagination } from '@ptg-react-libs/pagination/pagination';
import { useEffect, useState } from 'react';

export const TableWithServerSidePagination = (
  props: ITableWithServerSidePagination
) => {
  const [data, setData] = useState<
    { id: number; title: string; description: string }[]
  >([]);
  const [dataCount, setDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const columns = [
    { Header: 'ID', accessor: 'id', isNumeric: true },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Description', accessor: 'description' },
  ];

  // Generate mock data
  const generateMockData = (
    numItems: number
  ): { id: number; title: string; description: string }[] => {
    const mockData: { id: number; title: string; description: string }[] = [];
    for (let i = 1; i <= numItems; i++) {
      mockData.push({
        id: i,
        title: `Item ${i}`,
        description: `This is the description for item ${i}.`,
      });
    }
    return mockData;
  };

  useEffect(() => {
    const mockData = generateMockData(100); // Generate 100 mock data items
    setData(mockData);
    setDataCount(mockData.length);
  }, []);

  // Calculate the current items to display based on pagination
  const currentItems = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const componentCode = `
  import { PtgUiTable } from '@ptg-react-libs/data-table/table/Table';
  import { PtgUiPagination } from '@ptg-react-libs/pagination/pagination';
    const [data, setData] = useState<
    { id: number; title: string; description: string }[]
  >([]);
  const [dataCount, setDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const columns = [
    { Header: 'ID', accessor: 'id', isNumeric: true },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Description', accessor: 'description' },
  ];

  // Generate mock data
  const generateMockData = (
    numItems: number
  ): { id: number; title: string; description: string }[] => {
    const mockData: { id: number; title: string; description: string }[] = [];
    for (let i = 1; i <= numItems; i++) {
      mockData.push({
        id: i,
        title: 'Item',
        description: 'Add Description',
      });
    }
    return mockData;
  };

  useEffect(() => {
    const mockData = generateMockData(100); // Generate 100 mock data items
    setData(mockData);
    setDataCount(mockData.length);
  }, []);

  // Calculate the current items to display based on pagination
  const currentItems = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  `;

  // Note: HTML code for Rating
  const htmlCode = `
        <PtgUiTable columns={columns} data={currentItems} />
        <PtgUiPagination
          dataCount={dataCount}
          pageNumber={currentPage}
          pageIndex={setCurrentPage} // Update current page
          pageSize={pageSize}
          siblingCount={1} // Adjust as needed
          previousBtnText="Previous"
          nextBtnText="Next"
        />
  `;

  return (
    <section>
      {props?.showCodeWithServerSidePagination && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <PtgUiTable columns={columns} data={currentItems} />
        <PtgUiPagination
          dataCount={dataCount}
          pageNumber={currentPage}
          pageIndex={setCurrentPage} // Update current page
          pageSize={pageSize}
          siblingCount={1} // Adjust as needed
          previousBtnText="Previous"
          nextBtnText="Next"
        />
      </div>
    </section>
  );
};
