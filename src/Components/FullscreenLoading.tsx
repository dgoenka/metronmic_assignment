import { Spin } from "antd";
const FullscreenLoading: React.FC = () => (
  <div
    style={{
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "white",
    }}
  >
    <Spin size="large" />
  </div>
);
export default FullscreenLoading;
