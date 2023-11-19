import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

type HomeProps = Record<string, unknown>;

const Home: React.FC<HomeProps> = () => {
  return (
    <div
      className={
        "w-100 h-100 d-flex text-center align-items-center justify-content-center"
      }
    >
      <Title>Welcome to Lab Management System</Title>
    </div>
  );
};

export default Home;
