import { Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { SatelliteType, FilterType, SatelliteMetadata } from "../../types";
import { Satellite } from "../../utilities";

interface SidebarProps {
  metadata: SatelliteMetadata;
  satelliteManager: Satellite;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
}

export function FilterList({
  metadata,
  satelliteManager,
  filters,
  setFilters,
}: SidebarProps) {
  // const [filtered, setFiltered] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const items2: MenuProps["items"] = [
  //   UserOutlined,
  //   LaptopOutlined,
  //   NotificationOutlined,
  // ].map((icon, index) => {
  //   const key = String(index + 1);

  //   if (key === "1") {
  //     let subMenuChildren: any[] = metadata
  //       .map((sat, j) => {
  //         return {
  //           key: "Sat-" + sat.id,
  //           label: `Satellite ${sat.id}`,
  //           icon: undefined,
  //           onClick: () => {
  //             satalliteManager.filter([{
  //               'key' : 'id',
  //               'condition' : sat.id
  //             }]);
  //             setFiltered(true);
  //           },
  //         };
  //       });
  //     if (filtered) {
  //       subMenuChildren = subMenuChildren.concat([
  //         {
  //           key: "filtered",
  //           label: "Remove Filter",
  //           icon: React.createElement(CloseCircleOutlined),
  //           onClick: () => {
  //             satalliteManager.filter([]);
  //             setFiltered(false);
  //           },
  //         },
  //       ]);
  //     }
  //     return {
  //       key: `sub${key}`,
  //       icon: React.createElement(icon),
  //       label: key === "1" ? "Satellites" : `subnav ${Number(key) - 1}`,

  //       children: subMenuChildren,
  //     };
  //   }
  //   return {
  //     key: `sub${key}`,
  //     icon: React.createElement(icon),
  //     label: `subnav ${key}`,

  //     children: new Array(4).fill(null).map((_, j) => {
  //       const subKey = index * 4 + j + 1;
  //       return {
  //         key: subKey,
  //         label: `option${subKey}`,
  //       };
  //     }),
  //   };
  // });

  const items: any[] = [];
  // const keys = Object.keys(metadata);
  const entries = Object.entries(metadata);
  for (let i = 0; i < entries.length; i++) {
    const name = entries[i][0];
    const data = entries[i][1];

    let children: any[] = [];
    for (let j = 0; j < data.length; j++) {
      if (!(name in filters) || filters[name].includes(data[j])) {
        children.push({
          key: `${name}-${data[j]}`,
          label: `${data[j]}`,
          icon: undefined,
          onClick: () => {
            const filter_new = filters;
            filter_new[name] = [data[j]];
            setFilters(filter_new);
            satelliteManager.filter(filter_new);
          },
        });
      }
    }

    if (name in filters) {
      children = children.concat([
        {
          key: "filtered",
          label: "Remove Filter",
          icon: React.createElement(CloseCircleOutlined),
          onClick: () => {
            const filter_new = filters;
            delete filter_new[name];
            setFilters(filter_new);
            satelliteManager.filter(filter_new);
          },
        },
      ]);
    }

    items.push({
      key: `${name}-${i}`,
      icon: "",
      label: `${name}`,
      children: children,
    });
  }

  return (
    <Sider
      width={200}
      style={{
        background: colorBgContainer,
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
}
