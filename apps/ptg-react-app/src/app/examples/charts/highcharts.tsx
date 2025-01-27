/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 * 
*/
import {useState, useEffect} from 'react'
import PtgUiHCLine from './highcharts/line/line';
import PtgUiHCLineBar from './highcharts/linebar/linebar';
import PtgUiHCSColumn from './highcharts/stackedColumn/stackedColumn';
import { PtgUiColumn, PtgUiPie, PtgUi3dLine, PtgUi3dColumn, PtgUi3dPie, PtguseFetch } from '@ptg-ui/react';
import { highchartsLineData, highchartsPieData, highchartsColumnData, line3DOptions, column3DOptions, pie3dData } from '@ptg-react-app/mock/mocks';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';


/* eslint-disable-next-line */
export interface HighchartsProps { }
export interface PtgUiD3BarProps {
  data?:[],
  series?:[]
}
export function Highcharts(props: HighchartsProps) {
const [highchartsPieDataList, setHighchartsPieDataList] = useState<PtgUiD3BarProps>()
const [high2DBarData, setHigh2DBarData] = useState<any[]>([]);
const [high3DBarData, setHigh3DBarData] = useState<any[]>([]);
const [high3DPieData, setHigh3DPieData] = useState<any[]>([]);
const [high3DPieDataTitle, setHigh3DPieDataTitle] = useState<any[]>([]);
const [high3DLineData, setHigh3DLineData] = useState<any[]>([]);
const [high3DLineCat, setHigh3DLineCat] = useState<any[]>([]);
const [high3DLineName, setHigh3DLineName] = useState<any[]>([]);
const [high2DSingleLineChart, setHigh2DSingleLineChart] = useState<any[]>([]);

const {data:apiDataPieChart} = PtguseFetch('higher-charts-pie-lists') as any
const {data:apiHigh2DBarChart} = PtguseFetch('high-chart-column-lists') as any
const {data:apiHigh3DBarChart} = PtguseFetch('bar-chart-3ds') as any
const {data:apiHigh3DPieChart} = PtguseFetch('higher-charts-pie-lists') as any
const {data:apiHigh3DLineChart} = PtguseFetch('bar-chart-3ds') as any
const {data:api2DSingleLineChart} = PtguseFetch('high-charts-line-lists') as any

const { t } = useTranslation();

useEffect(()=>{

  const singleLineChart : any = {
    title : api2DSingleLineChart[0]?.attributes?.chart?.title,
    data : api2DSingleLineChart[0]?.attributes?.chart?.data,
    remainingOptions : api2DSingleLineChart[0]?.attributes?.chart?.remainingOptions
  }
 
  if(api2DSingleLineChart[0]){
    setHigh2DSingleLineChart(singleLineChart)
  }
 },[api2DSingleLineChart])

useEffect(()=>{
  const highPieChart : any = {
    title : apiDataPieChart[0]?.attributes?.title,
    data : apiDataPieChart[0]?.attributes?.data
  }
  setHighchartsPieDataList(highPieChart)
},[apiDataPieChart])

  useEffect(()=>{
    const dataArray = apiHigh2DBarChart[0]?.attributes?.categories.split(",");
    const value = apiHigh2DBarChart[0]?.attributes?.data;
 
    const barChartData : any  = {
      title : apiHigh2DBarChart[0]?.attributes?.title,
      data : value && JSON.parse(value),
      remainingOptions:{
        xAxis: {
          categories: dataArray
        },
      }
    }

    if(apiHigh2DBarChart[0]){
      setHigh2DBarData(barChartData)
    }
  },[apiHigh2DBarChart])

  useEffect(()=>{
    const arrayCat = apiHigh3DBarChart[0]?.attributes?.categories.split(",")
    const barChart3d : any = {
      data : apiHigh3DBarChart[0]?.attributes?.data,
      categories: arrayCat
    }
    setHigh3DBarData(barChart3d)
  },[apiHigh3DBarChart])

  useEffect(() => {
    setHigh3DPieData(apiHigh3DPieChart[0]?.attributes?.data)
    setHigh3DPieDataTitle(apiHigh3DPieChart[0]?.attributes?.title)
  },[apiHigh3DPieChart])

  useEffect(() => {
    setHigh3DLineData(apiHigh3DLineChart[0]?.attributes?.data)
    const categoryArray = apiHigh3DLineChart[0]?.attributes?.categories.split(",");
    setHigh3DLineCat(categoryArray)
  },[apiHigh3DLineChart])

  const [barChartCode, setBarChartCode] = useState(false);
  const [pieChartCode, setPieChartCode] = useState(false);
  const [lineBarChartCode, setLineBarChartCode ] = useState(false);
  const [stackChartCode, setStackChartCode ] = useState(false);
  const [bar3DCode, setBar3DCode] = useState(false);
  const [pie3DCode, setPie3DCode ] = useState(false);
  const [line3DCode, setLine3DCode ] = useState(false);

  const ShowBarChartCode = () => {
    if(!barChartCode){
      setBarChartCode(true);
    }
    else{
      setBarChartCode(false);
    }
  };

  const ShowPieChartCode = () => {
    if(!pieChartCode){
      setPieChartCode(true);
    }
    else{
      setPieChartCode(false);
    }
  };

  
  const ShowLineBarChartCode = () => {
    if(!lineBarChartCode){
      setLineBarChartCode(true);
    }
    else{
      setLineBarChartCode(false);
    }
  };

   
  const ShowStackBarChartCode = () => {
    if(!stackChartCode){
      setStackChartCode(true);
    }
    else{
      setStackChartCode(false);
    }
  };

  const ShowBar3DCode = () => {
    if(!bar3DCode){
      setBar3DCode(true);
    }
    else{
      setBar3DCode(false);
    }
  };

  
  const ShowPie3DCode = () => {
    if(!pie3DCode){
      setPie3DCode(true);
    }
    else{
      setPie3DCode(false);
    }
  };

   
  const ShowLine3DCode = () => {
    if(!line3DCode){
      setLine3DCode(true);
    }
    else{
      setLine3DCode(false);
    }
  };
  
  
  const barChartComponentCode = `
  
  export const highchartsColumnData:any ={
    title:'my Charts',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 
      216.4, 194.1, 95.6, 54.4],
    remainingOptions:{
      xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        
    },
    }
  }

    import { PtgUiColumn } from '@ptg-ui/react';
    import { highchartsColumnData } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const barChartHtmlCode = `
    <PtgUiColumn {...highchartsColumnData} />
  `

  const pieChartComponentCode = `

    export const highchartsPieData = {
      title:'My charts',
      data: [{ name: 'Chrome', y: 61.41, sliced: true, selected: true }, 
      { name: 'Internet Explorer', y: 11.84 },
      { name: 'Firefox', y: 10.85 }, 
      { name: 'Edge', y: 4.67 }, 
      { name: 'Safari', y: 4.18 }, 
      { name: 'Sogou Explorer', y: 1.64 }, 
      { name: 'Opera', y: 1.6 }, 
      { name: 'QQ', y: 1.2 }, 
      { name: 'Other', y: 2.61 }]
    }
   
    import { PtgUiPie } from '@ptg-ui/react';
    import { highchartsPieData } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const pieChartHtmlCode = `
    <PtgUiPie {...highchartsPieData} />
  `

  const lineBarComponentCode = `
 
  export const highchartsLineBarData:any = {
    title:'my Charts',
    subtitle:"Source: WorldClimate.com",
    categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    remainingOptions:{
    series:[{
      name: 'Rainfall',
      type: 'column',
      //yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
          valueSuffix: ' mm'
      }
  
  }, {
      name: 'Temperature',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
          valueSuffix: '°C'
      }
  }]
  }
  }
  
  import PtgUiHCLineBar from './highcharts/linebar/linebar';
  import { highchartsLineData } from '@ptg-react-app/mock/mocks';
  import { Tabs, Tab } from 'react-bootstrap';
  
  export interface HighchartsProps { }
  
  export function Highcharts(props: HighchartsProps) {
   
  export default Highcharts;`
  

  const lineBarHtmlCode = `
  <PtgUiHCLineBar {...highchartsLineData} />
  `

  const stackChartComponentCode = `

    export const highchartStackedColumnData:any ={
      title:"Stacked Column",
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      remainingOptions:{
        series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
      }
    }
    
    import PtgUiHCLineBar from './highcharts/linebar/linebar';
    import { highchartsLineData } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const stackChartHtmlCode = `
    <PtgUiHCSColumn {...highchartStackedColumnData} />
  `

  const bar3DComponentCode = `

    export const column3DOptions:any = {
      //title:"Languages",
      data: [
        {
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
        }
      ],
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    }
    
    import { PtgUi3dColumn } from '@ptg-ui/react';
    import { column3DOptions } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const bar3DHtmlCode = `
    <PtgUi3dColumn {...column3DOptions} />
  `

  const pie3DComponentCode = `

    export const pie3dData:any =
    {
      data:[
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ],
      title: ''
    }

    import { Tabs, Tab } from 'react-bootstrap';
    import { PtgUi3dPie } from '@ptg-ui/react';
    import { pie3dData } from '@ptg-react-app/mock/mocks'
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const pie3DHtmlCode = `
    <PtgUi3dPie {...pie3dData} />
  `

  const line3DComponentCode = `

    export const line3DOptions:any = {
      //title:"Languages",
      data: [
        {
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
        }
      ],
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    }
  
    import { Tabs, Tab } from 'react-bootstrap';
    import { PtgUi3dLine } from '@ptg-ui/react';
    import { line3DOptions } from '@ptg-react-app/mock/mocks';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const line3DHtmlCode = `
     <PtgUi3dLine {...line3DOptions} />
  `





  return (
    <div className="w-77">
      <Tabs defaultActiveKey="2d" className='active-tabs'>
        <Tab eventKey="2d" title="2D graphs">
        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('BAR_CHART_TEXT')}</h5>
          </div>

          <div className='col-2 mr-3 mt-1 mb-2'>
          <CodeIcon onClick={ShowBarChartCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
    
          {!barChartCode ? (
            <PtgUiColumn {...high2DBarData} />
          ):(
            <ShowCodeComponent componentCode={barChartComponentCode} htmlCode={barChartHtmlCode}/>
          )}
        </section>
          
        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('PIE_CHART_TEXT')}</h5>
          </div>

          <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowPieChartCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          
          {!pieChartCode ? (
            <PtgUiPie {...highchartsPieDataList} />
          ):(
            <ShowCodeComponent componentCode={pieChartComponentCode} htmlCode={pieChartHtmlCode}/>
          )}
        </section>

          <PtgUiHCLine {...[high2DSingleLineChart]} />

        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('LINE_BAR_CHART_TEXT')}</h5>
          </div>

          <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowLineBarChartCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>

          {!lineBarChartCode ? (
            <PtgUiHCLineBar />
          ):(
            <ShowCodeComponent componentCode={lineBarComponentCode} htmlCode={lineBarHtmlCode}/>
          )}
        </section>

        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('STACKED_CHART')}</h5>
          </div>

          <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowStackBarChartCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          
          {!stackChartCode ? (
            <PtgUiHCSColumn />
          ):(
            <ShowCodeComponent componentCode={stackChartComponentCode} htmlCode={stackChartHtmlCode}/>
          )}
        </section>

        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('BAR_CHART_TEXT')}</h5>
          </div>

          <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowBar3DCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          {!bar3DCode ? (
          <PtgUi3dColumn {...high3DBarData} />
          ):(
            <ShowCodeComponent componentCode={bar3DComponentCode} htmlCode={bar3DHtmlCode}/>
          )}
        </section>

        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>  
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('PIE_CHART_TEXT')}</h5>
          </div>

          <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowPie3DCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          {!pie3DCode ? (
            <PtgUi3dPie data={high3DPieData} title={high3DPieDataTitle} />
          ):(
            <ShowCodeComponent componentCode={pie3DComponentCode} htmlCode={pie3DHtmlCode}/>
          )}
        </section>

        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
          <div className='row'>
          <div className="col-10 mt-2">
          <h5 className="example-heading">{t('LINE_CHART_TEXT')}</h5>
          </div>

          <div className='col-2 mr-5 mt-1 mb-2'>
          <CodeIcon onClick={ShowLine3DCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          </div>
          {!line3DCode ? (
           <PtgUi3dLine data={high3DLineData} categories={high3DLineCat} title={high3DLineName} />
          ):(
            <ShowCodeComponent componentCode={line3DComponentCode} htmlCode={line3DHtmlCode}/>
          )}
        </section>
        </Tab>
      </Tabs>
    </div> 
  );
}

export default Highcharts;
