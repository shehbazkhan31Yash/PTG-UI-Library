/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
 */
{
  /*--Import Components for routing using lazy loading--*/
}
import { lazy } from 'react';
const Example3 = lazy(
  () => import('@ptg-react-app/examples/multi-step-form/Example3')
);
const PtgUiHome = lazy(() => import('@ptg-react-app/home/Home'));
const PtgUiAdminHome = lazy(() => import('@ptg-react-app/admin/AdminHome'));
const PtgUiResetPassword = lazy(
  () => import('@ptg-react-app/auth/resetpassword/ResetPassword')
);
const PtgUiPie = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts/pie/pie')
);
const PtgUiColumn = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts/column/column')
);
const PtgUiLine = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts/line/line')
);
const PtgHighcharts = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts')
);
const PtgUi3dLine = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts/3D/line/line')
);
const PtgUi3dColumn = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts/3D/column/column')
);
const PtgUi3dPie = lazy(
  () => import('@ptg-react-app/examples/charts/highcharts/3D/pie/pie')
);
const PtgUiD3Line = lazy(
  () => import('@ptg-react-app/examples/charts/d3/line/line')
);
const PtgUiD3Bar = lazy(
  () => import('@ptg-react-app/examples/charts/d3/bar/bar')
);
const PtgUiD3Pie = lazy(
  () => import('@ptg-react-app/examples/charts/d3/pie/pie')
);
const PtgD3Charts = lazy(
  () => import('@ptg-react-app/examples/charts/d3Charts')
);
const PtgUiReactDataGrid = lazy(
  () => import('@ptg-react-app/examples/data-table/react-data-grid')
);
const PtgUiAgGrid = lazy(
  () => import('@ptg-react-app/examples/data-table/ag-grid/ag-grid')
);
const PtgUiMaterialTable = lazy(
  () =>
    import('@ptg-react-app/examples/data-table/material/material-table-tabs')
);
const PtgUiDate = lazy(() => import('@ptg-react-app/examples/date/date'));
const PtgUiMultiSelectCheckbox = lazy(
  () => import('@ptg-react-app/examples/select/select')
);
const RoleBased = lazy(
  () => import('@ptg-react-app/examples/role-based/role-based')
);
const WebAccessibility = lazy(
  () => import('@ptg-react-app/examples/web-accessibility/web-accessibility')
);
const PtgUiDragnDrop = lazy(
  () => import('@ptg-react-app/examples/drag-n-drop/drag-n-drop')
);
const PtgUiPipes = lazy(
  () => import('@ptg-react-app/examples/pipes/PipeTabs')
);
const PtgUiDownloadFile = lazy(
  () => import('@ptg-react-app/examples/downloadFile/downloadFile')
);
const PtgUiDialog = lazy(() => import('../examples/dialog/dialog'));
const Breadcrumbs = lazy(() => import('../examples/breadcrumbs/breadcrumbs'));
const Cards = lazy(() => import('../examples/cards/cards'));
const PtgUiCarousel = lazy(() => import('../examples/carousel/carousel'));
const GridLayout = lazy(() => import('../examples/grid-layout/grid-layout'));
const Indeterminate = lazy(
  () => import('../examples/indeterminate-checkbox/indeterminate-checkbox')
);
const PtgUiReactTable = lazy(
  () => import('../examples/data-table/react-table')
);
const Accordian = lazy(() => import('../examples/Accordion/accordion'));
const Toaster = lazy(() => import('../examples/Toaster/toaster'));
const Button = lazy(() => import('../examples/buttons/buttons'));
const Authentication = lazy(() => import('../examples/auth/login/Login'));
const signUp = lazy(() => import('../examples/auth/signup/signup'));
const pagination = lazy(() => import('../examples/pagination/pagination'));

{
  /*--Declare routes and component for dynamic load--*/
}
const routing = [
  {
    path: '/admin-home',
    component: PtgUiAdminHome,
  },
  {
    path: '/datatable/aggrid',
    component: PtgUiAgGrid,
  },
  {
    path: '/datatable/reactdatagrid',
    component: PtgUiReactDataGrid,
  },
  {
    path: '/datatable/materialTable',
    component: PtgUiMaterialTable,
  },
  {
    path: '/datatable/reactTable',
    component: PtgUiReactTable,
  },
  {
    path: '/dragnDrop',
    component: PtgUiDragnDrop,
  },
  {
    path: '/pie',
    component: PtgUiPie,
  },
  {
    path: '/column',
    component: PtgUiColumn,
  },
  {
    path: '/line',
    component: PtgUiLine,
  },
  {
    path: '/highcharts',
    component: PtgHighcharts,
  },
  {
    path: '/d3charts',
    component: PtgD3Charts,
  },
  {
    path: '/3dline',
    component: PtgUi3dLine,
  },
  {
    path: '/3dcolumn',
    component: PtgUi3dColumn,
  },
  {
    path: '/3dpie',
    component: PtgUi3dPie,
  },
  {
    path: '/d3line',
    component: PtgUiD3Line,
  },
  {
    path: '/d3bar',
    component: PtgUiD3Bar,
  },
  {
    path: '/d3pie',
    component: PtgUiD3Pie,
  },
  {
    path: '/calendar',
    component: PtgUiDate,
  },
  {
    path: '/carousel',
    component: PtgUiCarousel,
  },
  {
    path: '/dialog',
    component: PtgUiDialog,
  },
  {
    path: '/downloadFile',
    component: PtgUiDownloadFile,
  },
  {
    path: '/gridLayout',
    component: GridLayout,
  },
  {
    path: '/indeterminate',
    component: Indeterminate,
  },
  {
    path: '/pipes',
    component: PtgUiPipes,
  },
  {
    path: '/select',
    component: PtgUiMultiSelectCheckbox,
  },
  {
    path: '/roleBased',
    component: RoleBased,
  },
  {
    path: '/webAccessibility',
    component: WebAccessibility,
  },
  {
    path: '/multistep',
    component: Example3,
  },
  {
    path: '/breadcrumbs',
    component: Breadcrumbs,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/accordian',
    component: Accordian,
  },
  {
    path: '/toaster',
    component: Toaster,
  },
  {
    path: '/button',
    component: Button,
  },
  {
    path: '/auth-login',
    component: Authentication,
  },
  {
    path: '/auth-signup',
    component: signUp,
  },
  {
    path: '/pagination',
    component: pagination,
  },
];
export default routing;
