import { theme, Input, Tree } from "antd";
import Sider from "antd/es/layout/Sider";

import React, { useMemo } from "react";
import { SatelliteType, FilterType } from "../../types";
import { Satellite } from "../../utilities";

interface SidebarProps {
  satellites: SatelliteType[];
  satelliteManager: Satellite;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setFocusedSatellite: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
  focusedSatellite: number;
}

export function SatelliteList({
  satellites,
  satelliteManager,
  filters,
  setFilters,
  setFocusedSatellite,
  setSearchValue,
  searchValue,
}: SidebarProps) {
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
    </Sider>
  );
}
