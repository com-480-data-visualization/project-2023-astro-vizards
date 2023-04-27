import { Menu, MenuProps, theme, Input, Tree, Drawer } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import React, { useState, useMemo } from "react";
import { SatelliteType, FilterType } from "../../types";
import { Satellite } from "../../utilities";
import { InfoSatellite } from "./infoSatellite";

interface SidebarProps {
  satellites: SatelliteType[];
  satelliteManager: Satellite;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
}

export function SatelliteList({
  satellites,
  satelliteManager,
  filters,
  setFilters,
}: SidebarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSatellites, setSelectedSatellites] = useState<number[]>([]);
  const [focusedSatellite, setFocusedSatellite] = useState<number>(-1);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value.toLowerCase());
  };

  const onSelect = (selected: any, info: any) => {
    setFocusedSatellite(selected[0]);
    const filter_new = filters;
    filter_new["id"] = [selected[0]];
    setFilters(filter_new);
    satelliteManager.filter(filter_new);
  };

  const onCheck = (checkedKeys: any, info: any) => {
    // setSelectedSatellites(checkedKeys);
    // if (checkedKeys.length > 0) {
    //   const filter_new = filters;
    //   filter_new['id'] = [ checkedKeys ];
    //   setFilters(filter_new);
    //   satelliteManager.filter(filter_new);
    // } else {
    //   const filter_new = filters;
    //   delete filter_new['id'];
    //   setFilters(filter_new);
    //   satelliteManager.filter(filter_new);
    // }
  };

  const treeData = useMemo(() => {
    const sats_list = [];
    for (let i = 0; i < satellites.length; i++) {
      const sat = satellites[i];
      if (
        searchValue === null ||
        searchValue === "" ||
        sat.name.toLowerCase().includes(searchValue)
      ) {
        const elem = <span>{sat.name}</span>;
        sats_list.push({
          title: elem,
          key: sat.id,
          icon: "🛰️",
        });
      }
    }
    return sats_list;
  }, [searchValue, satellites]);

  const onCloseDrawer = (e: any) => {
    setFocusedSatellite(-1);
    const filter_new = filters;
    delete filter_new["id"];
    setFilters(filter_new);
    satelliteManager.filter(filter_new);
  };

  const open_drawer = focusedSatellite >= 0;
  const info_sat = satelliteManager.getInfo(focusedSatellite);

  const { Search } = Input;
  return (
    <Sider
      width={200}
      style={{
        background: colorBgContainer,
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Search
        style={{ marginBottom: 8, marginTop: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        treeData={treeData}
        height={400}
        showIcon={true}
        checkable={true}
        onSelect={onSelect}
        onCheck={onCheck}
      />
      <div
        style={{
          textAlign: "center",
          marginTop: "0.25rem",
          paddingTop: "0.5rem",
          borderTop: "1px solid black",
        }}
      >
        {satellites.length} satellites
      </div>
      <Drawer open={open_drawer} onClose={onCloseDrawer}>
        <InfoSatellite data={info_sat} />
      </Drawer>
    </Sider>
  );
}
