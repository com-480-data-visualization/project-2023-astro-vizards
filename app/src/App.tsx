import "./app.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import Config from "@arcgis/core/config";
import { Header, SatelliteList } from "./components";
import { MapPage } from "./routes";
import { AboutUs } from "./routes/AboutUs/AboutUs";
import {
  clearAllPoints,
  drawMultiplePoints,
  initMap,
  Satellite,
} from "./utilities";
import { FilterType, SatelliteMetadata, SatelliteType } from "./types";
import { FilterList } from "./components/Sidebar/filterList";

function Home() {
  useEffect(() => {
    Config.apiKey =
      "AAPK1f6518e2b8eb428fbfacdb052c7ae46fBc6HgV5-adthrrY302f_qj1JtbLKYYV_9JKnXXR5OjnDaow1DiWmSzJHgmrj4xZ0";
  }, []);

  const view = useMemo(() => initMap(), []);

  // const [satellites, setSatellites] = useState<SatelliteType[]>(
  //   Satellite.getInitialSetOfSats()
  // );
  const [satellites, setSatellites] = useState<SatelliteType[]>([]);
  const [metadata, setMetadata] = useState<SatelliteMetadata>(
    Satellite.getEmptyMetadata(),
  );
  
  const [filters, setFilters] = useState<FilterType>({});

  const satelliteManager = useMemo(() => {
    const satMan = new Satellite(setSatellites, setMetadata);
    return satMan;
  }, []);

  useEffect(() => {
    clearAllPoints(view);
    drawMultiplePoints(view, satellites, satelliteManager);
  }, [satellites]);

  return (
    <Layout className="app">
      <Header />
      <Layout>
        <FilterList metadata={metadata} satelliteManager={satelliteManager} filters={filters} setFilters={setFilters} />
        <Layout className="app__content">
          <Routes>
            <Route path="/" element={<MapPage view={view} />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Layout>
        <SatelliteList satellites={satellites} satelliteManager={satelliteManager} filters={filters} setFilters={setFilters} />
      </Layout>
    </Layout>
  );
}

export default Home;
