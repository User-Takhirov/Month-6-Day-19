import React from "react";
import { loadState } from "../config/storage";
import { data } from "./layout-data";
import { Link, Navigate, Outlet } from "react-router-dom";
import { Button, Flex, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ReactIcon } from "../assets/react-icon";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Header } from "./Header";
const { Content, Footer } = Layout;

const item = data.map((item) => {
  return {
    key: item.id,
    label: <Link to={item.path}>{item.label}</Link>,
    icon: React.createElement(item.icon),
  };
});
export const MainLayout = () => {
  const token = loadState("token");
  const [state, setState] = React.useState(false);
  if (!token) {
    return <Navigate replace to={"/register"} />;
  }

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Header />
      </div>
      <div className="wrapper">
        <Layout style={{ height: "100%" }}>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={state}
              onCollapse={(value) => setState(value)}
              width={400}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
                items={item}
              />
            </Sider>
            <Layout
              style={{
                padding: "0 24px 24px",
              }}
            >
              <Flex
                align="center"
                gap={"10px"}
                style={{ width: "50px", height: "50px" }}
              >
                <Button
                  style={{ width: "50px", height: "50px" }}
                  type="primary"
                  onClick={() => setState(!state)}
                >
                  <UnorderedListOutlined />
                </Button>
                <Link to={'/app/Users'}>
                <Button>Add Users</Button>
                </Link>
              </Flex>

              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
