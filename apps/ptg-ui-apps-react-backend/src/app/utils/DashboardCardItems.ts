import angular_Image from '../../assets/images/Angular_full_color_logo.svg.png';
import react_Image from '../../assets/images/React-icon.svg.png';
import ptg_interview_Image from '../../assets/images/ptg_interview_assessment.png';
import ptg_document_Image from '../../assets/images/documentAccessing.png';
import ptg_googleMap_Image from '../../assets/images/ptg_google_map.png';
import ptg_animation_Image from '../../assets/images/ptg_animation.jpg';
import ptg_uisemantic_Image from '../../assets/images/ui_semanticc.jpg';
import metaVerse_Image from '../../assets/images/metaverse.jpg';
import best_practice_Image from '../../assets/images/best_practice.jpg';
import courses_link_Image from '../../assets/images/courses_link.jpg';

export const DashboardCardItems = [
  {
    id: 1,
    imageUrl: angular_Image,
    title: 'PTG Angular',
    content: 'This application demonstrates reusable Angular components.',
    docLink: '/ptg-angular-storybook',
    viewLink: '/ptg-angular-app',
  },
  {
    id: 2,
    imageUrl: react_Image,
    title: 'PTG React',
    content: 'This application demonstrates reusable React components.',
    button: 'View',
    viewLink: '/ptg-react-app',
    docLink: '/ptg-react-storybook',
  },
  {
    id: 3,
    imageUrl: ptg_interview_Image,
    title: 'PTG Interview Assessment Portal',
    content: 'Interview Assessment portal to assess and track candidates.',
    button: 'View',
    viewLink: 'https://interview-assessment.azurewebsites.net/',
  },
  {
    id: 13,
    imageUrl: courses_link_Image,
    title: 'Frontend Migration Accelerator',
    content:
      'Migration Accelerator resources portal to assist with frontend migration.',
    button: 'View',
    viewLink: '/frontend-migration-accelerator',
  },
  {
    id: 4,
    imageUrl: ptg_document_Image,
    title: 'PTG Document Assessment Portal',
    content:
      "Document Assessment portal to assess and track candidates' documents.",
    button: 'View',
    viewLink: '/ptg-angular-doc-process',
  },
  {
    id: 5,
    imageUrl: ptg_googleMap_Image,
    title: 'PTG Google Map',
    content:
      'Provides detailed information about geographical regions and sites worldwide.',
    button: 'View',
    viewLink: '/ptg-angular-google-map',
  },
  {
    id: 6,
    imageUrl: ptg_animation_Image,
    title: 'PTG Animations',
    content:
      'A technique in which images are manipulated to appear as moving images.',
    button: 'View',
    viewLink: '/ptg-react-animations',
  },
  {
    id: 7,
    imageUrl: ptg_uisemantic_Image,
    title: 'PTG UI Schematics',
    content:
      'This tool is used to generate UI apps for modern frameworks like Angular, React.',
    button: 'Download',
    viewLink:
      'https://yash-ui-apps.azurewebsites.net/uploads/PTG-UI-Generator.pptx',
  },
  {
    id: 8,
    imageUrl: react_Image,
    title: 'PTG React Web Components',
    content: 'Demonstrates how to consume stencil web components.',
    button: 'View',
    viewLink: '/ptg-ui-web-comp-react',
  },
  {
    id: 9,
    imageUrl: angular_Image,
    title: 'PTG Angular Web Components',
    content:
      'This application demonstrates how to consume stencil web components in an Angular application.',
    button: 'View',
    viewLink: '/ptg-ui-web-comp-angular',
  },
  {
    id: 10,
    imageUrl: metaVerse_Image,
    title: 'PTG Metaverse Components',
    content: 'Stencil web components in a React App.',
    button: 'View',
    viewLink: '/ptg-metaverse-comp-react',
  },
  {
    id: 11,
    imageUrl: best_practice_Image,
    title: 'PTG Best Practices Documents',
    content: 'Portal to access best practices documents.',
    button: 'View',
    viewLink: '/best_practices_docs',
  },
  {
    id: 12,
    imageUrl: courses_link_Image,
    title: 'PTG Courses Link',
    content: 'Portal to access different Courses Links.',
    button: 'View',
    viewLink:
      'https://yashtechn.plateau.com/learning/user/personal/landOnPortalHome.do?OWASP_CSRFTOKEN=Q4IE-FKDI-O2Q0-48US-38KJ-8J6D-9ADI-181X&fromSF=Y&fromDeepLink=true&pageID=',
  },
];
