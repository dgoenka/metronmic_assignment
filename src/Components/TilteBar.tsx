import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

type TitleBarProps = {
  title: string;
};
const TitleBar: React.FC<TitleBarProps> = ({ title }) => (
  <div
    style={{
      width: "100%",
      height: "min-content",
      padding: 16,
      background: "white",
      borderBottom: "1px rgba(145, 158, 171, 0.16) solid",
      justifyContent: "flex-start",
      alignItems: "center",
      display: "inline-flex",
      marginBottom: "16px",
    }}
  >
    <Title
      level={3}
      style={{
        color: "#253A64",
        marginBottom: 0,
      }}
    >
      {title}
    </Title>
  </div>
);

export default TitleBar;
