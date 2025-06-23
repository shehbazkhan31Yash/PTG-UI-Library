import Slb_Image from '../../assets/images/SLB_Logo_Positive_RGB_TM.svg';
import chRobinson_Image from '../../assets/images/ch_Robinson.jpg';
import johnDeere_Image from '../../assets/images/johndeer.jpg';
import polaris_Image from '../../assets/images/polaris.jpg';
import cnh_Image from '../../assets/images/cnh.jpg';
import caterpilar_image from '../../assets/images/caterpillar.jpg';
import bunzl_Image from '../../assets/images/bunzl.jpg';
import ethosEnergy_Image from '../../assets/images/ethos.jpg';
import angular_Image from '../../assets/images/Angular_full_color_logo.svg.png';
import typescript_Image from '../../assets/images/typescript_logo.png';
import bootstrap_Image from '../../assets/images/Bootstrap_logo.svg';
import css_Image from '../../assets/images/css3.png';
import html_Image from '../../assets/images/html.png';
import react_Image from '../../assets/images/React-icon.svg.png';
import vue_Image from '../../assets/images/vue.png';
import javascript_Image from '../../assets/images/javascript-1.svg';
import nextjs_Image from '../../assets/images/nextjs.png';
import MaterialUI_Image from '../../assets/images/materialui.png';
import { environment } from '@ptg-ui-apps-react-backend/environments/environment';
export const tabs = [
  { label: 'Home', to: '/home' },

  { label: 'Accelerators', to: '/projects' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Documents', to: '/bestPracticesDocs' },
  { label: 'Contact Us', to: '/teams' },
];

export const carouselItems = [
  {
    text: 'SLB',
    caption: 'SLB company, a pharetra augue mollis interdum.',
    imageURL: Slb_Image,
  },
  {
    text: 'CH Robinson',
    caption:
      'Second slide label, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageURL: chRobinson_Image,
  },
  {
    text: 'John Deere',
    caption:
      'Third slide label, Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imageURL: johnDeere_Image,
  },
  {
    text: 'Polaris',
    caption:
      'Third slide label, Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imageURL: polaris_Image,
  },
  {
    text: 'CNH',
    caption:
      'Third slide label, Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imageURL: cnh_Image,
  },
  {
    text: 'Caterpillar',
    caption:
      'Third slide label, Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imageURL: caterpilar_image,
  },
  {
    text: 'Bunzl',
    caption:
      'Third slide label, Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imageURL: bunzl_Image,
  },
  {
    text: 'Ethos Energy',
    caption:
      'Third slide label, Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imageURL: ethosEnergy_Image,
  },
];

export const technologiesItems = [
  {
    id: 1,
    imageUrl: angular_Image,
    title: 'Angular',
  },
  {
    id: 2,
    imageUrl: typescript_Image,
    title: 'TypeScript',
  },
  {
    id: 3,
    imageUrl: bootstrap_Image,
    title: 'Bootstrap',
  },
  {
    id: 4,
    imageUrl: css_Image,
    title: 'CSS3',
  },
  {
    id: 5,
    imageUrl: html_Image,
    title: 'Html5',
  },
  {
    id: 6,
    imageUrl: react_Image,
    title: 'React',
  },
  {
    id: 7,
    imageUrl: vue_Image,
    title: 'Vue',
  },
  {
    id: 8,
    imageUrl: javascript_Image,
    title: 'Javascript',
  },
  {
    id: 9,
    imageUrl: nextjs_Image,
    title: 'Next.js',
  },
  {
    id: 10,
    imageUrl: MaterialUI_Image,
    title: 'materail UI',
  },
];

export const contactsTeams = [
  {
    name: 'Nitin Gupta',
    designation: 'Sr. Vice President',
    email: 'nitin@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Nitin.jpg`
        : `${environment.localUrl}/assets/images/UI-Nitin.jpg`,
  },
  {
    name: 'Lokesh Sapre',
    designation: 'Lead Practice Manager',
    email: 'lokesh.sapre@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Lokesh.jpg`
        : `${environment.localUrl}/assets/images/UI-Lokesh.jpg`,
  },
  {
    name: 'Sujal Ray',
    designation: 'Technical Architect',
    email: 'sujal.ray@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Sujal.jpg`
        : `${environment.localUrl}/assets/images/UI-Sujal.jpg`,
  },
  {
    name: 'Lokesh Daiya',
    designation: 'Technical Architect',
    email: 'lokesh.daiya@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Lokesh.jpeg`
        : `${environment.localUrl}/assets/images/UI-Lokesh.jpeg`,
  },
];

export const bestPracticesDocs = [
  {
    id: 1,
    attributes: {
      createdAt: '2025-06-19T04:02:52.714Z',
      updatedAt: '2025-06-19T04:02:54.209Z',
      publishedAt: '2025-06-19T04:02:54.206Z',
      file: {
        data: [
          {
            id: 1,
            attributes: {
              name: 'BestPractices-FrontEnd.pptx',
              alternativeText: null,
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'Best_Practices_Front_End_d7c90a5e3c',
              ext: '.pptx',
              mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
              size: 2033.78,
              url:
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.docUrl}/uploads/BestPractices-FrontEnd.pptx`
                  : `${environment.localUrl}/uploads/BestPractices-FrontEnd.pptx`,
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2025-06-18T12:17:51.100Z',
              updatedAt: '2025-06-18T12:17:51.100Z',
            },
          },
        ],
      },
      fileType: {
        data: null,
      },
    },
  },
  {
    id: 2,
    attributes: {
      createdAt: '2025-06-19T04:03:36.207Z',
      updatedAt: '2025-06-19T04:03:38.520Z',
      publishedAt: '2025-06-19T04:03:38.514Z',
      file: {
        data: [
          {
            id: 12,
            attributes: {
              name: 'CodingStandard-Angular.docx',
              alternativeText: null,
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'Coding_Standard_Angular_4c79168a07',
              ext: '.docx',
              mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              size: 387.61,
              url:
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.docUrl}/uploads/CodingStandard-Angular.docx`
                  : `${environment.localUrl}/uploads/CodingStandard-Angular.docx`,
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2025-06-19T04:00:27.678Z',
              updatedAt: '2025-06-19T04:00:27.678Z',
            },
          },
        ],
      },
      fileType: {
        data: null,
      },
    },
  },
  {
    id: 3,
    attributes: {
      createdAt: '2025-06-19T04:04:14.433Z',
      updatedAt: '2025-06-19T04:04:15.745Z',
      publishedAt: '2025-06-19T04:04:15.740Z',
      file: {
        data: [
          {
            id: 2,
            attributes: {
              name: 'CodingStandard-React.docx',
              alternativeText: null,
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'Coding_Standard_React_f9bd01f05d',
              ext: '.docx',
              mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              size: 71.06,
              url:
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.docUrl}/uploads/CodingStandard-React.docx`
                  : `${environment.localUrl}/uploads/CodingStandard-React.docx`,
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2025-06-18T12:18:21.141Z',
              updatedAt: '2025-06-18T12:18:21.141Z',
            },
          },
        ],
      },
      fileType: {
        data: null,
      },
    },
  },
  {
    id: 4,
    attributes: {
      createdAt: '2025-06-19T04:04:53.153Z',
      updatedAt: '2025-06-19T04:04:54.911Z',
      publishedAt: '2025-06-19T04:04:54.903Z',
      file: {
        data: [
          {
            id: 3,
            attributes: {
              name: 'PTG-UI-Generator.pptx',
              alternativeText: null,
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'PTG_UI_Generator_16d05664d0',
              ext: '.pptx',
              mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
              size: 781.26,
              url:
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.docUrl}/uploads/PTG-UI-Generator.pptx`
                  : `${environment.localUrl}/uploads/PTG-UI-Generator.pptx`,
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2025-06-18T12:18:32.137Z',
              updatedAt: '2025-06-18T12:18:32.137Z',
            },
          },
        ],
      },
      fileType: {
        data: null,
      },
    },
  },
  {
    id: 6,
    attributes: {
      createdAt: '2025-06-19T07:05:33.174Z',
      updatedAt: '2025-06-19T07:05:35.811Z',
      publishedAt: '2025-06-19T07:05:35.807Z',
      file: {
        data: [
          {
            id: 13,
            attributes: {
              name: 'Security Guidelines-UI.pptx',
              alternativeText: null,
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'Security_Guidelines_UI_eb7ebd42b6',
              ext: '.pptx',
              mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
              size: 2037.92,
              url:
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.docUrl}/uploads/Security Guidelines-UI.pptx`
                  : `${environment.localUrl}/uploads/Security Guidelines-UI.pptx`,
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2025-06-19T07:03:38.193Z',
              updatedAt: '2025-06-19T07:03:38.193Z',
            },
          },
        ],
      },
      fileType: {
        data: null,
      },
    },
  },
  {
    id: 7,
    attributes: {
      createdAt: '2025-06-19T07:06:46.793Z',
      updatedAt: '2025-06-19T07:06:48.389Z',
      publishedAt: '2025-06-19T07:06:48.385Z',
      file: {
        data: [
          {
            id: 14,
            attributes: {
              name: 'UI Best Practices ReactJS.xlsx',
              alternativeText: null,
              caption: null,
              width: null,
              height: null,
              formats: null,
              hash: 'Front_End_Best_Practices_Using_React_JS_32d114da77',
              ext: '.xlsx',
              mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              size: 26.03,
              url:
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.docUrl}/uploads/Front End Best Practices Using ReactJS.xlsx`
                  : `${environment.localUrl}/uploads/Front End Best Practices Using ReactJS.xlsx`,
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2025-06-19T07:04:04.079Z',
              updatedAt: '2025-06-19T07:04:04.079Z',
            },
          },
        ],
      },
      fileType: {
        data: null,
      },
    },
  },
];
