import { Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { SatelliteType } from "../../types";
import { sideBarRemoveFilter, sideBarSatClick } from "../../utilities";

interface SidebarProps {
  satellites: SatelliteType[];
  setSatellites: React.Dispatch<React.SetStateAction<SatelliteType[]>>;
}

export function Sidebar({ satellites, setSatellites }: SidebarProps) {
  const [filtered, setFiltered] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    if (key === "1") {
      let subMenuChildren: any[] = satellites.map((sat, j) => {
        return {
          key: "Sat-" + sat.id,
          label: `Satellite ${sat.id}`,
          icon: undefined,
          onClick: () => {
            sideBarSatClick(sat, setSatellites);
            setFiltered(true);
          },
        };
      });
      if (filtered) {
        subMenuChildren = subMenuChildren.concat([
          {
            key: "filtered",
            label: "Remove Filter",
            icon: React.createElement(CloseCircleOutlined),
            onClick: () => {
              sideBarRemoveFilter(setSatellites);
              setFiltered(false);
            },
          },
        ]);
      }
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: key === "1" ? "Satellites" : `subnav ${Number(key) - 1}`,

        children: subMenuChildren,
      };
    }
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
}
