import { Menu, Space, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { CloseCircleOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { FilterType, SatelliteMetadata } from "../../types";
import { Satellite } from "../../utilities";
import Search from "antd/es/input/Search";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./filter-list.scss";

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items: any[] = [];
  const [entries, setEntries] = React.useState(Object.entries(metadata));
  const [searchVal, setSearchVal] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(true);

  useEffect(() => {
    const temp: [string, string[]][] = Object.entries(metadata).map((entry) => {
      return [
        entry[0],
        entry[1].filter((val) => {
          return (
            val.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1 ||
            (entry[0] in filters && filters[entry[0]].includes(val))
          );
        }),
      ];
    });

    console.log("Temp is:", temp);
    console.log("Expected res", Object.entries(metadata));
    setEntries(temp);
  }, [metadata, searchVal]);

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
      className="filterList"
      width={200}
      collapsed={collapsed}
      style={{
        background: colorBgContainer,
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      {collapsed ? (
        <RightCircleOutlined
          className="filterList__icon filterList__icon--collapsed"
          style={{ right: "-12.5%" }}
          onClick={() => setCollapsed(!collapsed)}
        />
      ) : (
        <LeftCircleOutlined
          className="filterList__icon"
          style={{ right: "-5%" }}
          onClick={() => setCollapsed(!collapsed)}
        />
      )}

      {!collapsed && (
        <Search
          placeholder="input search text"
          onSearch={(val, e) => console.log(val, e)}
          onChange={(e) => setSearchVal(e.target.value)}
          style={{ width: 200 }}
        />
      )}

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
