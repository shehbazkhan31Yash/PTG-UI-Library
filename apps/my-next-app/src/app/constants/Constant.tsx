import bg from '../../../public/icons/yash_logo.png';
export const items = [
  { label: 'Home', key: '1', target: '/' },
  { label: 'About', key: '2', target: '/about' },
  { label: 'Services', key: '3', target: '/services' },
  { label: 'Teams', key: '4', target: '/teams' },
  { label: 'Contact', key: '5', target: '/contact' },
];

export const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  background: '#0056b3',
  zIndex: 1,
};

export const contentStyle: React.CSSProperties = {
  overflowY: 'scroll',
  background: 'rgba(248,249,250,0.9)',
  padding: '2rem 0',
};

export const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#0056b3',
};

export const layoutStyle = {
  overflow: 'hidden',
  backgroundImage: `url(${bg.src})`,
  height: '100vh',
  backgroundSize: 'cover',
};
