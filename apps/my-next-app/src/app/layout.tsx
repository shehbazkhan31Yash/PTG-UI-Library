'use client';
import './global.css';
import { Col, Layout, Menu, Row } from 'antd';
import { useRouter } from 'next/navigation';
import {
  contentStyle,
  footerStyle,
  headerStyle,
  items,
  layoutStyle,
} from './constants/Constant';
const { Header, Footer, Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigate = useRouter();
  const handleNavMenuClick = ({ key }: { key: string }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate.push(target);
    }
  };
  return (
    <html lang="en">
      <title>PTG Next Apps</title>
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Row>
              <Col span={6}>
                <div className="demo-logo">
                  <h1 className="logo_text">PTG UI Apps</h1>
                </div>
              </Col>
              <Col span={8} offset={10}>
                <Menu
                  className="font-medium flext-1 min-w-0 bg-[#0056b3]"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  items={items}
                  onClick={handleNavMenuClick}
                />
              </Col>
            </Row>
          </Header>
          <Content style={contentStyle}> {children}</Content>
          <Footer style={footerStyle}>
            © {new Date().getFullYear()} PTG UI Apps. All rights reserved.
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
