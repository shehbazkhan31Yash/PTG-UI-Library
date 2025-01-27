import './line.scss';
import { PtgUiLine, PtguseFetch } from '@ptg-ui/react';
import { useState, useEffect } from 'react';
import { highchartsLineData, highchartsMultiLineData } from '@ptg-react-app/mock/mocks';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface PtgUiHCLineProps { }

export function PtgUiHCLine(props: PtgUiHCLineProps) {
  const { t } = useTranslation();

  
  const [showLineChartCode, setShowLineChartCode] = useState(false);
  const [showMultiLineChartCode, setShowMultiLineChartCode] = useState(false);
  const [high2DMultiLine, setHigh2DMultiLine] = useState<any[]>([]);
 
  const {data:apiHigh2DMultiLine} = PtguseFetch('high-chart-multi-line-lists') as any

  useEffect(()=>{
    const multiLineChart : any  = {
      title : apiHigh2DMultiLine[0]?.attributes?.chart?.title,
      data: [],
      remainingOptions: apiHigh2DMultiLine[0]?.attributes?.chart?.remainingOptions
    }
    setHigh2DMultiLine(multiLineChart)
  },[apiHigh2DMultiLine])
  
  const ShowLineChartCode = () => {
    if(!showLineChartCode){
      setShowLineChartCode(true);
    }
    else{
      setShowLineChartCode(false);
    }
  };

  const ShowMultiLineChartCode = () => {
    if(!showMultiLineChartCode){
      setShowMultiLineChartCode(true);
    }
    else{
      setShowMultiLineChartCode(false);
    }
  };

  const singleLineChartComponentCode = `
    
    export const highchartsLineData:any = {
      title:'my Charts',
      data: [],
      remainingOptions:{
        xAxis: {
          lineColor: 'transparent',
          tickLength: 0
      },
      
        plotOptions: {
          series: {
              pointStart: 2010
          }
      },
      series:[{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],
      }
    }

  
  import { PtgUiLine } from '@ptg-ui/react';
  import { highchartsLineData } from '@ptg-react-app/mock/mocks';

  export interface PtgUiHCLineProps { }
  
  export function PtgUiHCLine(props: PtgUiHCLineProps) {
  

  export default PtgUiHCLine;`

  const singleLineChartHtmlCode = `
    <PtgUiLine {...highchartsLineData} />
  `

  const mutlipleLineChartComponentCode = `

    export const highchartsMultiLineData:any = {
      title:'my Charts',
      data: [],
      remainingOptions:{
      
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
          'Sep', 'Oct', 'Nov', 'Dec']
      },
      plotOptions: {
        series: {
            lineWidth: 5
        }
    },
      series:[{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]
      }
    }
  
    import { PtgUiLine } from '@ptg-ui/react';
    import { highchartsMultiLineData } from '@ptg-react-app/mock/mocks';
  
    export interface PtgUiHCLineProps { }
    
    export function PtgUiHCLine(props: PtgUiHCLineProps) {
    
  
    export default PtgUiHCLine;`

  const multipleLineChartHtmlCode = `
    <PtgUiLine {...highchartsMultiLineData} /> 
  `
  return (
    <>
      <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
      <div className='row'>
        <div className="col-10 mt-2">
          <h5 className='example-heading'>{t('SINGLE_LINE_CHART')}</h5>
        </div>
  
        <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowLineChartCode} fontSize="large" className='show-code-icon'></CodeIcon>
        </div>
        <hr className='horizontal-line'/>
      </div>
      <PtgUiLine {...highchartsLineData} />
    </section>

    <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
      <div className='row'>
        <div className="col-10 mt-2">
          <h5 className='example-heading'>{t('MULTIPLE_LINE_CHART')}</h5>
        </div>

        <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowMultiLineChartCode} fontSize="large" className='show-code-icon'></CodeIcon>
        </div>
        <hr className='horizontal-line'/>
      </div>
      {!showMultiLineChartCode ? (
        <PtgUiLine {...highchartsMultiLineData} />
      ): (
        <ShowCodeComponent componentCode={mutlipleLineChartComponentCode} htmlCode={multipleLineChartHtmlCode}/>
      )}
    </section>
    </>
  );
}

export default PtgUiHCLine;
