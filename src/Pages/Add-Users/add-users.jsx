import { Button, Form, Input, message } from "antd";
import React from "react";
import { useCreateUser } from "../../service/mutation/useCreateUsers";
import { useQueryClient } from "react-query";

export const AddUsers = () => {
  const queryClient = useQueryClient();
  const { mutate } = useCreateUser();
  const [form] = Form.useForm();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        message.success("success");
        form.resetFields();
        queryClient.invalidateQueries("Users");
      },
    });
  };

  return (
    <div>
      <Form
        form={form}
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
  );
};
