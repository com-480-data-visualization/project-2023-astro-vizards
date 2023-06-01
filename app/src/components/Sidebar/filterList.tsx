import { Menu, MenuItemProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { CloseCircleOutlined } from "@ant-design/icons";
import React, { Ref, RefObject, forwardRef, useEffect } from "react";
import { FilterType, SatelliteMetadata } from "../../types";
import { Satellite } from "../../utilities";
import Search from "antd/es/input/Search";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./filter-list.scss";
import { MenuProps } from "rc-menu";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

interface SidebarProps {
  metadata: SatelliteMetadata;
  satelliteManager: Satellite;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
}

function FilterListFunction({
  metadata,
  satelliteManager,
  filters,
  setFilters,
}: SidebarProps, ref: RefObject<HTMLDivElement>) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [entries, setEntries] = React.useState(Object.entries(metadata));
  const [searchVal, setSearchVal] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState<Array<string>>([]);
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

    setEntries(temp);
  }, [metadata, searchVal]);

  const items = React.useMemo(
    () =>
      entries.map((entry, index) => {
        const name = entry[0];
        const data = entry[1];

        let children: MenuItemType[] = [];
        for (let j = 0; j < data.length; j++) {
          if (!(name in filters) || filters[name].includes(data[j])) {
            children.push({
              key: `${name}-${data[j]}`,
              label: `${data[j]}`,
              onClick: () => {
                const filter_new = filters;
                if (
                  filter_new[name] !== undefined &&
                  filter_new[name][0] === data[j]
                ) {
                  delete filter_new[name];
                  setSelectedKeys([]);
                } else {
                  filter_new[name] = [data[j]];
                  setSelectedKeys([`${name}-${data[j]}`]);
                }
                setFilters(filter_new);
                satelliteManager.filter(filter_new);
              },
            });
          }
        }
        return {
          key: `${name}-${index}`,
          icon: "",
          label: `${name}`,
          children: children,
        } as MenuItemType;
      }),
    [entries]
  );

  return (
    <Sider
      className="filterList"
      width={200}
      ref={ref}
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
          defaultValue={searchVal}
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
        selectedKeys={selectedKeys}
      />
    </Sider>
  );
}

export const FilterList = forwardRef<RefObject<HTMLInputElement>, SidebarProps>((props, ref) => FilterListFunction(props, ref as RefObject<HTMLInputElement>))