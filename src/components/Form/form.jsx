import { Button, Form, Input } from "antd";
import React from "react";

export const FormData = ({ submit, isLoading, data }) => {
  return (
    <>
      <div>
        <Form
          initialValues={{ ...data }}
          name="basic"
          layout="vertical"
          style={{ maxWidth: 600 }}
          onFinish={submit}
        >
          <Form.Item
            style={{ marginBottom: "30px" }}
            label={<label style={{ fontSize: "20px" }}>Name</label>}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input style={{ padding: "10px", fontSize: "20px" }} />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "30px" }}
            label={<label style={{ fontSize: "20px" }}>Email</label>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input type="email" style={{ padding: "10px", fontSize: "20px" }} />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "30px" }}
            label={<label style={{ fontSize: "20px" }}>Number</label>}
            name="number"
            rules={[
              {
                required: true,
                message: "Please input your number!",
              },
            ]}
          >
            <Input style={{ padding: "10px", fontSize: "20px" }} />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ height: "53px", width: "200px", fontSize: "20px" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
