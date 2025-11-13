/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
 */

import { lazy } from 'react';

/*--Import Components for routing using lazy loading--*/
const Example3 = lazy(
  () => import('@ptg-react-app/examples/multi-step-form/Example3')
);
const PtgUiAdminHome = lazy(() => import('@ptg-react-app/admin/AdminHome'));
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
const PtgUiTable = lazy(
  () => import('@ptg-react-app/examples/data-table/Table')
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
  () => import('@ptg-react-app/examples/pipes/pipe-tabs')
);
const PtgUiDownloadFile = lazy(
  () => import('@ptg-react-app/examples/downloadFile/downloadFile')
);
const PtgUiDialog = lazy(() => import('../examples/dialog/dialog'));
const Breadcrumbs = lazy(() => import('../examples/breadcrumbs/Breadcrumbs'));
const Cards = lazy(() => import('../examples/cards/cards'));
const PtgUiCarousel = lazy(() => import('../examples/carousel/carousel'));
const GridLayout = lazy(() => import('../examples/grid-layout/GridLayout'));
const Indeterminate = lazy(
  () => import('../examples/indeterminate-checkbox/indeterminate-checkbox')
);
const Accordian = lazy(() => import('../examples/Accordion/Accordions'));
const Textarea = lazy(() => import('../examples/Textarea/textarea'));
const Toaster = lazy(() => import('../examples/Toaster/toaster'));
const TransferList = lazy(() => import('../examples/TransferList/TransferList'));
const Avatar = lazy(() => import('../examples/avatar/CustomAvatar'));
const Button = lazy(() => import('../examples/buttons/buttons'));
const Authentication = lazy(() => import('../examples/auth/login/Login'));
const SignUp = lazy(() => import('../examples/auth/signup/signup'));
const pagination = lazy(() => import('../examples/pagination/pagination'));
const Rating = lazy(() => import('../examples/rating/rating'));
const DatePicker = lazy(() => import('../examples/DatePicker/DatePicker'));
const Radiobox = lazy(()=> import('../examples/Radiobox/Radiobox'));
const Loader = lazy(() => import('../examples/loader/Loader'));
const AppBar = lazy(() => import('../examples/appbar/appbar'));
const Chatbot = lazy(() => import('../examples/chatbot/Chatbot'));
const LangchainChatbot = lazy(
  () => import('../examples/chatbot-langchain/Chatbot')
);
const PDFRenderer = lazy(() => import('../examples/PDF-Renderer/PDFRenderer'));
const ChatbotFullScreen = lazy(
  () => import('../examples/chatbot/ChatbotFullScreen')
);
const LangChainChatbotFullScreen = lazy(
  () => import('../examples/chatbot-langchain/ChatbotFullScreen')
);
const SocialMediaSignIn = lazy(
  () => import('../examples/social-sso/SocialMediaSignIn')
);
const SocialMediaShare = lazy(() => import('../examples/social-media-share/SocialMediaShare'));

/*--Declare routes and component for dynamic load--*/

const routing = [
  {
    path: '/admin-home',
    component: PtgUiAdminHome,
  },
  { path: '/datatable/table', component: PtgUiTable },
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
    path: '/aichatbot',
    component: Chatbot,
  },
  {
    path: '/aichatbot-langchain',
    component: LangchainChatbot,
  },
  {
    path: '/pdf-renderer',
    component: PDFRenderer,
  },
  {
    path: '/social-media-share',
    component: SocialMediaShare,
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
    path: '/avatar',
    component: Avatar,
  },
  {
    path: '/textarea',
    component: Textarea,
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
    component: SignUp,
  },
  {
    path: '/pagination',
    component: pagination,
  },
  {
    path: '/rating',
    component: Rating,
  },
  {
    path: '/appbar',
    component: AppBar,
  },
  {
    path:'/radioBox',
    component: Radiobox,
  },
  {
    path:'/transferList',
    component: TransferList,
  },
  {
    path: '/datePicker',
    component: DatePicker,
  },
  {
    path: '/loader',
    component: Loader,
  },
  {
    path: '/social-media-login',
    component: SocialMediaSignIn,
  },
  {
    path: '/aichatbot-yash',
    component: ChatbotFullScreen,
    requiresLayout: true,
  },
  {
    path: '/ai-langchain-chatbot-yash',
    component: LangChainChatbotFullScreen,
    requiresLayout: true,
  },
];
export default routing;
