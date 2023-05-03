import { Menu, MenuProps } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { BookOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";

const items: MenuProps["items"] = [
  {
    icon: <RocketOutlined />,
    key: "",
    label: "Satellites",
  },
  {
    icon: <BookOutlined />,
    key: "about-us",
    label: "About Us",
  },
];

export function Header() {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: MenuInfo) => {
    if (key) navigate(key);
    else navigate("/");
  };
  return (
    <AntHeader className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        onClick={(e) => handleMenuClick(e)}
      />
    </AntHeader>
  );
}
