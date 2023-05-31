import { Menu, MenuProps } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { BookOutlined, RocketOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import {TimeBar} from './timebar'

const items: MenuProps["items"] = [
  {
    icon: <RocketOutlined />,
    key: "",
    label: "2D Satellites",
  },
  {
    icon: <RocketOutlined />,
    key: "three-d-view",
    label: "3D View",
  },
  {
    icon: <EnvironmentOutlined />,
    key: "launch-sites",
    label: "Launch Sites",
  },
  {
    icon: <BookOutlined />,
    key: "about-us",
    label: "About Us",
  }
];

export function Header({currentDate, setCurrentDate}: any) {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: MenuInfo) => {
    if (key) navigate(key);
    else navigate("/");
  };
  return (
    <AntHeader className="header">
      <div className="logo" />
      <div style={{float: 'right'}}>
        <TimeBar currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      </div>
      <div style={{width: '50rem'}}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={(e) => handleMenuClick(e)}
        />
      </div>
    </AntHeader>
  );
}
