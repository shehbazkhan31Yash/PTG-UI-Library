
'use client'
import './global.css';
import { Col, Layout, Menu ,Row } from 'antd';
import bg from '../../public/icons/yash_logo.png'
import { useRouter } from "next/navigation";
const { Header, Footer, Content } = Layout;


const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  background:'#0056b3',
  zIndex: 1,
};

const contentStyle: React.CSSProperties = {
overflowY:'scroll',
background:'rgba(248,249,250,0.9)',
padding:'2rem 0'
};


const footerStyle: React.CSSProperties = {
textAlign: 'center',
color: '#fff',
backgroundColor: '#0056b3',
};

const layoutStyle = {
overflow: 'hidden',
backgroundImage: `url(${bg.src})`,
height: '100vh',
backgroundSize:'cover'
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const items = [
    { label: "Home", key: "1", target: "/" },
    { label: "About", key: "2", target:"/about" },
    { label: "Services", key: "3", target:"/services" },
    { label: "Teams", key: "4", target:"/teams" },
    { label: "Contact", key: "5", target:"/contact" },
  ];
    const navigate = useRouter();
  const handleNavMenuClick = ({key} : {key:string}) => {
    const { target } = items.find(item => item.key === key) || {};
    if (target) {
     navigate.push(target)
    }
 };
  return (
    <html lang="en">
      <title>PTG Next Apps</title>
       <head>
       <link rel="icon" type="image/x-icon" href="favicon.ico"/> 
       <link rel="icon" href="favicon.ico"/>
     </head>
      <body>
      <Layout style={layoutStyle}>
      <Header
        style={headerStyle}
      >
      <Row>
      <Col span={6}>
      <div className="demo-logo">
      <h1 className='logo_text'>PTG UI Apps</h1>
        </div>
      </Col>
      <Col span={8} offset={10}>
      <Menu
      className='font-medium'
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0,background:'#0056b3' }}
          onClick={handleNavMenuClick}
        />
      </Col>
      </Row>
      </Header>
      <Content style={contentStyle}> {children}</Content>
      <Footer style={footerStyle}>© {new Date().getFullYear()} PTG UI Apps. All rights reserved.</Footer>
    </Layout>
        
      </body>
    </html>
  );
}






