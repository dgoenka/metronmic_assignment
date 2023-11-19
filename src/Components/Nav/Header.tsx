import {
  HomeTwoTone,
  PlusOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useMatch, useLocation } from "react-router-dom";
import { useStore } from "effector-react";
import { $me } from "../../Store/Auth.ts";
import { ReactNode } from "react";
import "./Header.css";
import { useWindowSize } from "@uidotdev/usehooks";

type HeaderProps = {
  children: ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const location = useLocation();
  const match = useMatch(location.pathname)?.pathname;
  const meStore = useStore($me);
  const { width } = useWindowSize();
  console.log("width: " + width);
  const isSmallScreen = !width || width <= 768;
  console.log("isSmallScreen: " + isSmallScreen);
  return (
    <>
      <div className={"reactRoot"}>
        <div className={"headerRoot"}>
          <Menu
            selectedKeys={[match || "/"]}
            mode={isSmallScreen ? "horizontal" : "inline"}
            className={"menuRoot"}
          >
            <Menu.Item
              key="/"
              icon={<HomeTwoTone />}
              disabled={!meStore.id}
              className={!meStore.id ? "d-none" : ""}
            >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              key="/add"
              icon={<PlusOutlined />}
              disabled={!meStore.id}
              className={!meStore.id ? "d-none" : ""}
            >
              <Link to="/add">Add Lab</Link>
            </Menu.Item>
            <Menu.Item
              key="/logout"
              icon={<LogoutOutlined />}
              disabled={!meStore.id}
              className={!meStore.id ? "d-none" : ""}
            >
              <Link to="/logout">Logout</Link>
            </Menu.Item>

            <Menu.Item
              key="/login"
              icon={<LoginOutlined />}
              disabled={!!meStore.id}
              className={meStore.id ? "d-none" : ""}
            >
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item
              key="/register"
              icon={<UserAddOutlined />}
              disabled={!!meStore.id}
              className={meStore.id ? "d-none" : ""}
            >
              <Link to="/register">Register</Link>
            </Menu.Item>
          </Menu>
          <div className={"headerContainer"}>{children}</div>
        </div>
      </div>
    </>
  );
};
export default Header;
