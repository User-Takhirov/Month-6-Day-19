import { Typography } from "antd";
import React from "react";

export const Header = () => {
  return (
    <>
      <Typography.Title
        level={2}
        style={{
          fontSize: "25px",
          backgroundColor: "black",
          color: "white",
          margin: "0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Header
      </Typography.Title>
    </>
  );
};
