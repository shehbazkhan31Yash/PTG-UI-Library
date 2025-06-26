import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import './table.css';
import { TableWithDefaultProps } from './TableWithDefaultProps';
import { TableWithPagination } from './TableWithPagination';
import { TableWithStickyHeader } from './TableWithStickyHeader';
import { TableWithServerSidePagination } from './TableWithServerSide';

const TableExample = () => {
  const { t } = useTranslation();

  const [showCodeWithDefaultProps, setShowCodeWithDefaultProps] =
    useState<boolean>(false);

  const [showCodeWithPagination, setShowCodeWithPagination] =
    useState<boolean>(false);

  const [showCodeWithStickyHeader, setShowCodeWithStickyHeader] =
    useState<boolean>(false);

  const [
    showCodeWithServerSidePagination,
    setShowCodeWithServerSidePagination,
  ] = useState<boolean>(false);

  const ShowExampleWithDefaultProps = () =>
    setShowCodeWithDefaultProps(!showCodeWithDefaultProps);

  const ShowExampleWithPagination = () =>
    setShowCodeWithPagination(!showCodeWithPagination);

  const ShowExampleWithStickyHeader = () =>
    setShowCodeWithStickyHeader(!showCodeWithStickyHeader);

  const ShowExampleWithServerSidePagination = () =>
    setShowCodeWithServerSidePagination(!showCodeWithServerSidePagination);

  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('TABLE-WITH-DEFAULT-PROPS')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithDefaultProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <TableWithDefaultProps
            showCodeWithDefaultProps={showCodeWithDefaultProps}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('TABLE-WITH-PAGINATION')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithPagination}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <TableWithPagination
            showCodeWithPagination={showCodeWithPagination}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('TABLE-WITH-STICKY-HEADER')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithStickyHeader}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <TableWithStickyHeader
            showCodeWithStickyHeader={showCodeWithStickyHeader}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('TABLE-WITH-SERVER-SIDE-PAGINATION')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithServerSidePagination}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <TableWithServerSidePagination
            showCodeWithServerSidePagination={showCodeWithServerSidePagination}
          />
        </div>
      </section>
    </div>
  );
};
export default TableExample;
