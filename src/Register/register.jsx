import React from "react";
import { Flex, Form, Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../service/mutation/useRegister";

export const Register = () => {
  const { mutate } = useRegister();
  const navigate = useNavigate();
  const onFinish = (values) => {
    mutate(values, {
      onSuccess: () => {
        message.success("sucess");
        navigate("/");
      },
    });
  };
  const onFinishFailed = (error) => {
    message.error("error");
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
        <Form
          style={{ width: "100%" }}
          layout="vertical"
          labelCol={{ span: 6 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginBottom: "20px" }}
            label={<label style={{ fontSize: "20px" }}>Name</label>}
            name="name"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              style={{ padding: "10px", fontSize: "20px" }}
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "20px" }}
            label={<label style={{ fontSize: "20px" }}>Email</label>}
            name="email"
            rules={[
              {
                required: true,
                type: "email",
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
