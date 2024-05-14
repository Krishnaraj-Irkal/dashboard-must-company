import React, { useState } from "react";
import {
  DashboardOutlined,
  WalletOutlined,
  DollarOutlined,
  FileOutlined,
  SettingOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { MenuProps, Input } from "antd";
import { Layout, Menu, theme, Space } from "antd";
import "./App.css";
import CompleteComponent from "./Components/CompleteComponent";

const { Header, Content, Sider } = Layout;

const siderMenuItems: MenuProps["items"] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <WalletOutlined />,
    label: "Investment",
  },
  {
    key: "3",
    icon: <DollarOutlined />,
    label: "Payments",
  },
  {
    key: "4",
    icon: <FileOutlined />,
    label: "Record",
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 50px",
          height: "70px",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          background: "#fff",
          color: "#2a3958",
        }}
      >
        <div style={{ color: "#2a3958", fontSize: "24px", fontWeight: "bold" }}>
          Krishnaraj Irkal
        </div>
        <Space>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ borderRadius: 8, height: "40px" }}
          />
          <div style={{ display: "flex", gap: "8px", paddingTop: "7px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #d7d8da",
                cursor: "pointer",
              }}
            >
              <SettingOutlined style={{ fontSize: "16px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #d7d8da",
                cursor: "pointer",
              }}
            >
              <UserOutlined style={{ fontSize: "16px" }} />
            </div>
          </div>
        </Space>
      </Header>
      <Layout style={{ minHeight: "100vh", paddingTop: "70px" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            position: "fixed",
            height: "100vh",
            left: 0,
            top: "70px",
            zIndex: 1000,
            background: "#fff",
          }}
        >
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={siderMenuItems}
            style={{ color: "#2a3958", fontSize: "16px" }}
            // Custom class to override selected item styles
            className="custom-sider-menu"
          />
        </Sider>
        <Layout
          style={{
            marginLeft: collapsed ? "80px" : "200px",
            paddingTop: "20px",
          }}
        >
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <CompleteComponent />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
