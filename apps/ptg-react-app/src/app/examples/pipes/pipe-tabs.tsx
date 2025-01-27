/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 *
 */
/**
 * @since April 2022
 * @author Ankit patidar
 * @desc Filter Example using filter reusable component
 */
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Pipes from './pipes';
import PipeEvent from './pipe-events';
import CodeIcon from '@mui/icons-material/Code';

/* eslint-disable-next-line */
export interface PipeTabsProps {}

export function PipeTabs(props: PipeTabsProps) {
  const { t } = useTranslation();
  const [showPipeCode, setShowPipeCode] = useState(false);
  const [showEventCode, setShowEventCode] = useState(false);
  
  const ShowPipeCode = () => {
    if(!showPipeCode){
      setShowPipeCode(true);
    }
    else{
      setShowPipeCode(false);
    }
  };

  const ShowEventCode = () => {
    if(!showEventCode){
      setShowEventCode(true);
    }
    else{
      setShowEventCode(false);
    }
  };

  return (
    <div className="w-100">
      <Tabs defaultActiveKey="2d" className='active-tabs'>
        <Tab eventKey="2d" title={t('PIPE')}>
        <section className="card-section-two bg-white rounded pt-2 mt-4 mb-2 pb-4">
          <div className="row">
          <div className='col-10 mt-2'>
            <h5 className='example-heading'>Pipes</h5>
          </div>
          <div className='col-2 mr-5 mt-1 mb-2'>
            <CodeIcon onClick={ShowPipeCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          <div className='m-3'>
            <Pipes showPipeCode={showPipeCode}/>
          </div>
        </section>
        </Tab>
        <Tab eventKey="3d" title={t('EVENT')}>
        <section className="card-section-two bg-white rounded pt-2 mt-4 mb-2 pb-4">
          <div className="row">
          <div className='col-10 mt-2'>
            <h5 className='example-heading'>Events</h5>
          </div>
          <div className='col-2 mr-5 mt-1 mb-2'>
            <CodeIcon onClick={ShowEventCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          <div className='m-3'>
          <PipeEvent showEventCode={showEventCode} />
          </div>
        </section>
        </Tab>
      </Tabs>
    </div>
  );
}

export default PipeTabs;
