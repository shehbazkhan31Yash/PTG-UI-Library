/**
 * @since Jan 2025
 * @author Manish Patidar
 * @uses Example using download as reusable component.
 *
 */

import { useState, useEffect } from 'react';
import { PtgUiDownload } from '@ptg-ui/react';
import { downloadFileData } from '../../mock/mocks';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';

const DownloadFileExample = () => {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);
  const { data: apiData } = PtguseFetch('download-file-lists') as any;

  useEffect(() => {
    if (apiData[0]) {
      setGridData(apiData[0]?.attributes?.data?.data);
    }
  }, [apiData]);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
    import { PtgUiDownload } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    //------------Column must be this format for excel download----------//
    const columns = ['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT']

    //------------data must be this format for excel download----------//
    const data = [
      [1, 'Astik', 'Manager', 'Engineering and MBA'],
      [2, 'Yogita', 'QA', 'Testing'],
      [3, 'Rajesh', 'Manager', 'Management'],
      [4, 'Swapnil', 'Developer', 'Development'],
      [5, 'Anmol', 'Consultant', 'HR'],
      [6, 'Mansi', 'Software Developer', 'Engineering'],
      [7, 'Astik', 'Manager', 'Engineering and MBA'],
      [8, 'Yogita', 'QA', 'Testing'],
      [9, 'Rajesh', 'Manager', 'Management'],
      [10, 'Yogita', 'QA', 'Testing'],
    ]
  `;
  const htmlCode = `
    <PtgUiDownload
      excelColumns={columns}
      excelDataToDownload={data}
      allowFileTypes={['PDF', 'EXCEL', 'JPG', 'WORD']}
    >
      // YOUR CODE FOR DOWNLOAD...............
      <div className="col-lg-12 mb-3 col-sm-12 col-xs-12">
        <div className="table-responsive">
          <table className="table table-bordered" data-testid="table">
            <thead>
              <tr>
                {column?.map((col, index) => {
                  return <th key={index}>{col}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((ele, index) => {
                return (
                  <tr key={index}>
                    {ele.map((value, valueIndex) => {
                      return (
                        <td key={valueIndex}> {value} </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PtgUiDownload>
  `;
  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">
            {t('FILE_DOWNLOAD')}
          </h5>
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

        <div className="me-4">
          <PtgUiDownload
            excelColumns={downloadFileData.columns}
            excelDataToDownload={downloadFileData.data}
            allowFileTypes={['PDF', 'EXCEL', 'JPG', 'WORD']}
            downloadBtnText={t('DOWNLOAD')}
            downloadFileName={t('DOWNLOAD_FILE_NAME')}
          >
            <div className="col-lg-12 mb-3 col-sm-12 col-xs-12">
              <div className="table-responsive">
                <table className="table table-bordered" data-testid="table">
                  <thead>
                    <tr>
                      {downloadFileData?.columns?.map(
                        (col: any, index: any) => {
                          return <th key={`tableHeader_` + index}>{col}</th>;
                        }
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {gridData?.map((ele: any, index: any) => {
                      return (
                        <tr key={`downloadFile_${index}`}>
                          {ele.map((value: any, valueIndex: any) => {
                            return (
                              <td key={`dataValue_` + valueIndex}> {value} </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </PtgUiDownload>
        </div>
      </div>
    </section>
  );
};

export default DownloadFileExample;
