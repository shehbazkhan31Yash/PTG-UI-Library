/**
 * @since Oct 2024
 * @author Manish Patidar
 * @desc Reusable Pagination Component
 *
 */
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { PtgUiPagination } from '@ptg-ui/react';

export function PtgPagination() {
  const [showCode, setShowCode] = useState(false);
  const [dataCount, setDataCount] = useState(80);
  const [pageNumber, setPageNumber] = useState(1);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const pageIndex = (num) => {
    setPageNumber(num);
  };

  const componentCode = `
    import { PtgUiPagination } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    const [dataCount, setdataCount] = useState(60);
    const [pageNumber, setPageNumber] = useState(1);
    
    const pageIndex = (num) => {
      setPageNumber(num);
    };
  `;

  const htmlCode = `
    <PtgUiPagination
      dataCount={dataCount}
      pageNumber={pageNumber}
      pageIndex={(num) => pageIndex(num)}
      pageSize={5}
      siblingCount={0}
      previousBtnText={'Previous'}
      nextBtnText={'Next'}
    />
  `;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Pagination</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
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
        <div className="ms-2">
          <PtgUiPagination
            dataCount={dataCount}
            pageNumber={pageNumber}
            pageIndex={(num) => pageIndex(num)}
            pageSize={5}
            siblingCount={1}
            previousBtnText={'Previous'}
            nextBtnText={'Next'}
          />
        </div>
      </div>
    </section>
  );
}
export default PtgPagination;
