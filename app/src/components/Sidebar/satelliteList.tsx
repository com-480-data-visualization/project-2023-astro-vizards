import { theme, Input, Tree, Checkbox, Card } from "antd";
import Sider from "antd/es/layout/Sider";

import React, { ForwardedRef, RefObject, useImperativeHandle, useMemo } from "react";
import { SatelliteType, FilterType } from "../../types";
import { MapManager, Satellite } from "../../utilities";

interface SidebarProps {
  satellites: SatelliteType[];
  satelliteManager: Satellite;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setFocusedSatellite: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
  focusedSatellite: number;
  mapManager: MapManager;
}

export type SatelliteListRefs = {
  rightSideBar: RefObject<HTMLInputElement>;
  activeSats: RefObject<HTMLInputElement>;
}

function SatelliteListFunction({
  satellites,
  satelliteManager,
  mapManager,
  filters,
  setFilters,
  setFocusedSatellite,
  setSearchValue,
  searchValue,
}: SidebarProps, ref: ForwardedRef<SatelliteListRefs>) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value.toLowerCase());
  };

  const onSelect = (selected: any, info: any) => {
    if(selected === undefined || selected.length === 0) return;
    const satId = selected[0]
    setFocusedSatellite(satId);
    const selectedGraphic = mapManager.getCurrentPoints()[satId].graphic;
    mapManager.getView().goTo({
      target: selectedGraphic[0].geometry,
      zoom: 4,
      heading: 0,
      tilt: 60,
    })
    mapManager.get3DView().goTo({
      target: selectedGraphic[1].geometry,
      zoom: 4,
      heading: 0,
      tilt: 60,
    })
    mapManager.clearOrbits();
    mapManager.drawOrbit(
      mapManager.getCurrentPoints()[satId].satellite,
      satelliteManager
    );
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

  const onChangeCheckbox = (e : any) => {
    const filter_new = filters;
    if (e.target.checked) {
      filter_new['in_active'] = [true];
    } else {
      delete filter_new['in_active'];
    }
    setFilters(filter_new);
    satelliteManager.filter(filter_new);
  }

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
  const rightSideBar = React.useRef<HTMLInputElement>(null);
  const activeSats = React.useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    rightSideBar: rightSideBar,
    activeSats: activeSats,
  }));

  return (
    <Sider
      width={200}
      ref={rightSideBar}
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
        checkable={false}
        selectable={true}
        selectedKeys={[]}
        onSelect={onSelect}
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

      <Card title="Extra options" style={{marginTop: '1rem'}} ref={activeSats}>
        <Checkbox defaultChecked={true} onChange={onChangeCheckbox}/> Only active satellites
      </Card>
    </Sider>
  );
}

export const SatelliteList = React.forwardRef<SatelliteListRefs, SidebarProps>((props, ref) => SatelliteListFunction(props, ref));