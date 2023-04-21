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
import { Satellite } from "../../utilities";

interface SidebarProps {
  satalliteManager: Satellite;
}

export function Sidebar({ satalliteManager }: SidebarProps) {
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
      let subMenuChildren: any[] = satalliteManager
        .getSatellites()
        .map((sat, j) => {
          return {
            key: "Sat-" + sat.id,
            label: `Satellite ${sat.id}`,
            icon: undefined,
            onClick: () => {
              satalliteManager.chooseSat(sat);
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
              satalliteManager.removeFilter();
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
