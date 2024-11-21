import { Button, Flex, Form, Input, message, Typography } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveState } from "../config/storage";
import { useLogin } from "../service/mutation/useLogin";

export const Login = () => {
  const navigate = useNavigate();
  const { mutate } = useLogin();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        message.success(`Welcome ${res.user.name}`);
        saveState("token", res);
        navigate("/app");
      },
    });
  };

  return (
    <>
      <Flex
        vertical
        style={{
          width: "500px",
          margin: "auto",
          marginTop: "100px",
          padding: "30px",
          borderRadius: "15px",
          border: "2px solid black",
        }}
      >
        <div>
          <Link to={"/register"}>
            <Typography.Title
              level={2}
              style={{ margin: "0", marginBottom: "20px" }}
            >
              Register
            </Typography.Title>
          </Link>
        </div>
        <Form
          style={{ width: "100%" }}
          layout="vertical"
          labelCol={{ span: 6 }}
          onFinish={submit}
        >
          <Form.Item
            style={{ marginBottom: "20px" }}
            label={<label style={{ fontSize: "20px" }}>Email</label>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              style={{ padding: "10px", fontSize: "20px" }}
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "30px" }}
            label={<label style={{ fontSize: "20px" }}>Password</label>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              autoComplete="off"
              style={{
                padding: "10px",
                fontSize: "20px",
              }}
            />
          </Form.Item>

          <Form.Item style={{ margin: "0" }}>
            <Button
              style={{ width: "100%", padding: "20px" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </>
  );
};
