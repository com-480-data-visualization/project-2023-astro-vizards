import "./app.scss";
import { useEffect, useMemo, useState } from "react";
import { Drawer, Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import Config from "@arcgis/core/config";
import { Header, SatelliteList, InfoSatellite } from "./components";
import { MapPage } from "./routes";
import { AboutUs } from "./routes/AboutUs/AboutUs";
import { MapManager, Satellite } from "./utilities";
import { FilterType, SatelliteMetadata, SatelliteType } from "./types";
import { FilterList } from "./components/Sidebar/filterList";

function Home() {
  useEffect(() => {
    Config.apiKey =
      "AAPK1f6518e2b8eb428fbfacdb052c7ae46fBc6HgV5-adthrrY302f_qj1JtbLKYYV_9JKnXXR5OjnDaow1DiWmSzJHgmrj4xZ0";
  }, []);
  const [searchValue, setSearchValue] = useState("");
  const [focusedSatellite, setFocusedSatellite] = useState<number>(-1);
  const [satellites, setSatellites] = useState<SatelliteType[]>([]);
  const [metadata, setMetadata] = useState<SatelliteMetadata>(
    Satellite.getEmptyMetadata()
  );

  const mapManager = useMemo(
    () =>
      new MapManager(setFocusedSatellite, (selectedGraphic, _this) => {
        const satId = selectedGraphic.attributes.satellite_id;
        _this.setFocusedSat(satId);
        _this.getView().goTo(_this.getCurrentPoints()[satId].graphic);
        _this.getView().set("zoom", 10);
      }),
    []
  );
  const satelliteManager = useMemo(() => {
    const satMan = new Satellite(setSatellites, setMetadata, (satellites) => mapManager.drawInitialPoints(satellites));
    return satMan;
  }, [mapManager]);

  const [filters, setFilters] = useState<FilterType>({});

  useEffect(() => {
    mapManager.clearAllPoints();
    mapManager.showPoints(satellites);
  }, [satellites]);

  const onCloseDrawer = (e: any) => {
    setFocusedSatellite(-1);
    const filter_new = filters;
    delete filter_new["id"];
    setFilters(filter_new);
    satelliteManager.filter(filter_new);
  };

  return (
    <Layout className="app">
      <Header />
      <Layout>
        <FilterList
          metadata={metadata}
          satelliteManager={satelliteManager}
          filters={filters}
          setFilters={setFilters}
        />
        <Layout className="app__content">
          <Routes>
            <Route path="/" element={<MapPage mapManager={mapManager} />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Layout>
        <SatelliteList
          satellites={satellites}
          satelliteManager={satelliteManager}
          filters={filters}
          setFilters={setFilters}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          focusedSatellite={focusedSatellite}
          setFocusedSatellite={setFocusedSatellite}
        />
      </Layout>
      <Drawer open={focusedSatellite >= 0} onClose={onCloseDrawer}>
        <InfoSatellite data={satelliteManager.getInfo(focusedSatellite)} />
      </Drawer>
    </Layout>
  );
}

export default Home;
