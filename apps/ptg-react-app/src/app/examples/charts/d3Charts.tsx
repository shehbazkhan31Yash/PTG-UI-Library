/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Example using 3D charts as reusable component.
 *
 */
import { useState, useEffect } from 'react';
import { PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { Row } from 'react-bootstrap';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import PtgUiD3Pie from '@ptg-react-app/components/charts/d3/pie/pie';
import PtgUiD3Line from '@ptg-react-app/components/charts/d3/line/line';
import PtgUId3Bar from './d3/bar/bar';

/* eslint-disable-next-line */

export interface PtgUiD3BarProps {
  data?: [];
}
export function D3Charts() {
  const [apiDataBarChartData, setapiDataBarChartData] =
    useState<PtgUiD3BarProps>();
  const [apiDataPieChartData, setapiDataPieChartData] =
    useState<PtgUiD3BarProps>();
  const [apiDataLineChartData, setapiDataLineChartData] =
    useState<PtgUiD3BarProps>();
  const [barChartCode, setBarChartCode] = useState(false);
  const [pieChartCode, setPieChartCode] = useState(false);
  const [lineChartCode, setLineChartCode] = useState(false);
  const { data: apiDataBarChart } = PtguseFetch('d3-bar-lists') as any;
  const { data: apiDataPieChart } = PtguseFetch('d3-pie-r-lists') as any;
  const { data: apiDataLineChart } = PtguseFetch('d3-line-lists') as any;

  const { t } = useTranslation();

  useEffect(() => {
    const heightValue = Number(apiDataPieChart[0]?.attributes?.height);
    const widthValue = Number(apiDataPieChart[0]?.attributes?.width);
    const innerRadiusValue = Number(
      apiDataPieChart[0]?.attributes?.innerRadius
    );
    const outerRadiusValue = Number(
      apiDataPieChart[0]?.attributes?.outerRadius
    );

    const d3PieChart: any = {
      height: heightValue,
      width: widthValue,
      innerRadius: innerRadiusValue,
      outerRadius: outerRadiusValue,
      data: apiDataPieChart[0]?.attributes?.data,
    };
    setapiDataPieChartData(d3PieChart);
  }, [apiDataPieChart]);

  useEffect(() => {
    const d3LineChart: any = {
      data: apiDataLineChart[0]?.attributes?.data.map((item) => {
        return { ...item, date: new Date(item.date) };
      }),
    };
    setapiDataLineChartData(d3LineChart);
  }, [apiDataLineChart]);

  useEffect(() => {
    const heightValue = Number(apiDataBarChart[0]?.attributes?.height);
    const widthValue = Number(apiDataBarChart[0]?.attributes?.width);
    const d3BarChart: any = {
      height: heightValue,
      width: widthValue,
      title: apiDataBarChart[0]?.attributes?.title,
      source: apiDataBarChart[0]?.attributes?.source,
      x_title: apiDataBarChart[0]?.attributes?.x_title,
      y_title: apiDataBarChart[0]?.attributes?.y_title,
      data: apiDataBarChart[0]?.attributes?.data,
    };
    setapiDataBarChartData(d3BarChart);
  }, [apiDataBarChart]);
  const ShowExampleCode = () => {
    if (!barChartCode) {
      setBarChartCode(true);
    } else {
      setBarChartCode(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if (!pieChartCode) {
      setPieChartCode(true);
    } else {
      setPieChartCode(false);
    }
  };

  const ShowExampleCodeThree = () => {
    if (!lineChartCode) {
      setLineChartCode(true);
    } else {
      setLineChartCode(false);
    }
  };

  const componentCodeBarChart = `
  export const d3BarData:any = {
    height:600,
    width:800,
    title:"My Charts",
    source:'Trending languages',
    x_title:'Languages',
    y_title:'Numbers',
    data: [
      { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
      { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
      { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
      { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange',},
      { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
    ],
  }
 
  import {  PtgUiD3Bar } from '@ptg-ui/react';
  import { d3BarData } from '@ptg-react-app/mock/mocks';
  export function D3Charts() {
   
  export default D3Charts;
  `;
  const htmlCodeBarChart = `
    <PtgUiD3Bar {...d3BarData} />
  `;

  const componentCodePieChart = `
  
  export const d3PieData:any= {
    height:600,
      width:800,
      innerRadius:0,
      outerRadius:150,
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange' },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ],
    }

  import {PtgUiD3Pie } from '@ptg-ui/react';
  import { d3PieData } from '@ptg-react-app/mock/mocks';

  export function D3Charts() {
  export default D3Charts;
`;
  const htmlCodePieChart = `
    <PtgUiD3Pie {...d3PieData} />
  `;

  const componentCodeLineChart = `

  export const d3LineData:any =
  {data:[
  { date:new Date("2022-03-01"), value:130 },
  { date:new Date("2022-02-15"), value:300 },
  { date: new Date("2022-02-01"), value:1000 },
  ]};

  import { PtgUiD3Line } from '@ptg-ui/react';
  import { d3LineData } from '@ptg-react-app/mock/mocks';

  export function D3Charts() {
  
  export default D3Charts;`;

  const htmlCodeLineChart = `
    <PtgUiD3Line {...d3LineData} />
  `;

  return (
    <>
      <Row className="charts-card bg-white rounded pt-2 pb-1 mb-4">
        <div className="col-10 mt-2">
          <h5>{t('BAR_CHART_TEXT')}</h5>
        </div>

        <div className="col-2 mb-2 mt-1">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />

        {/* Extracted ternary for bar chart */}
        {(() => {
          const hasBarData = apiDataBarChartData?.data?.length;
          if (!barChartCode) {
            return hasBarData ? <PtgUId3Bar {...apiDataBarChartData} /> : null;
          }
          return (
            <ShowCodeComponent
              componentCode={componentCodeBarChart}
              htmlCode={htmlCodeBarChart}
            />
          );
        })()}
      </Row>

      <Row className="charts-card bg-white rounded pt-2 pb-1 mb-4">
        <div className="col-10 mt-2">
          <h5>{t('PIE_CHART_TEXT')}</h5>
        </div>
        <div className="col-2 mr-5 mb-2 mt-1">
          <CodeIcon
            onClick={ShowExampleCodeTwo}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />

        {/* Extracted ternary for pie chart */}
        {(() => {
          const hasPieData = apiDataPieChartData?.data?.length;
          if (!pieChartCode) {
            return hasPieData ? <PtgUiD3Pie {...apiDataPieChartData} /> : null;
          }
          return (
            <ShowCodeComponent
              componentCode={componentCodePieChart}
              htmlCode={htmlCodePieChart}
            />
          );
        })()}
      </Row>
      <Row className="charts-card bg-white rounded pt-2 pb-1 mb-2">
        <div className="col-10 mt-2">
          <h5>{t('LINE_CHART_TEXT')}</h5>
        </div>

        <div className="col-2 mr-5 mb-2 mt-1">
          <CodeIcon
            onClick={ShowExampleCodeThree}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {/* Extracted ternary for line chart */}
        {(() => {
          const hasLineData = apiDataLineChartData?.data?.length;
          if (!lineChartCode) {
            return hasLineData ? <PtgUiD3Line {...apiDataLineChartData} /> : null;
          }
          return (
            <ShowCodeComponent
              componentCode={componentCodeLineChart}
              htmlCode={htmlCodeLineChart}
            />
          );
        })()}
      </Row>
    </>
  );
}

export default D3Charts;
