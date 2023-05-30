import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

import { route_info } from './main';

import "./App.css";

const App: React.FC = () => {
  const { token: { colorBgContainer }, } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', }}      >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
          items={route_info[0].children.map((val, index) => {
            const key = index + 1;
            return {
              key,
              label: <Link to={val.path}>{val.title}</Link>,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Use Ant Design to construct this page.</Footer>
    </Layout >
  );
};

export default App
