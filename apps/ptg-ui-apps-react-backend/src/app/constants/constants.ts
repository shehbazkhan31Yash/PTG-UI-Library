import Slb_Image from '../../assets/images/slb.jpg';
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
  { label: 'Services', to: '/services' },
  { label: 'Teams', to: '/teams' },
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
    designation: 'Business Unit Head',
    email: 'nitin@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Nitin.jpg`
        : `${environment.localUrl}/assets/images/UI-Nitin.jpg`,
  },
  {
    name: 'Lokesh Sapre',
    designation: 'Competency Head',
    email: 'lokesh.sapre@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Lokesh.jpg`
        : `${environment.localUrl}/assets/images/UI-Lokesh.jpg`,
  },
  {
    name: 'Sujal Ray',
    designation: 'Competency Manager',
    email: 'sujal.ray@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Sujal.jpg`
        : `${environment.localUrl}/assets/images/UI-Sujal.jpg`,
  },
  {
    name: 'Lokesh Daiya',
    designation: 'Solution Architect',
    email: 'lokesh.daiya@yash.com',
    photo:
      process.env['NODE_ENV'] === 'production'
        ? `${environment.url}/UI-Lokesh.jpeg`
        : `${environment.localUrl}/assets/images/UI-Nitin.jpeg`,
  },
];
