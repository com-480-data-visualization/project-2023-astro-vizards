import "./app.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import Config from "@arcgis/core/config";
import { Header, Sidebar } from "./components";
import { MapPage } from "./routes";
import { AboutUs } from "./routes/AboutUs/AboutUs";
import {
  clearAllPoints,
  drawMultiplePoints,
  initMap,
  Satellite,
} from "./utilities";
import { SatelliteType } from "./types";

function Home() {
  useEffect(() => {
    Config.apiKey =
      "AAPK1f6518e2b8eb428fbfacdb052c7ae46fBc6HgV5-adthrrY302f_qj1JtbLKYYV_9JKnXXR5OjnDaow1DiWmSzJHgmrj4xZ0";
  }, []);

  const view = useMemo(() => initMap(), []);

  const [satellites, setSatellites] = useState<SatelliteType[]>(
    Satellite.getInitialSetOfSats()
  );

  const satelliteManager = useMemo(() => {
    const satMan = new Satellite(setSatellites);
    return satMan;
  }, []);

  useEffect(() => {
    clearAllPoints(view);
    drawMultiplePoints(view, satellites);
  }, [satellites]);

  return (
    <Layout className="app">
      <Header />
      <Layout>
        <Sidebar satalliteManager={satelliteManager} />
        <Layout className="app__content">
          <Routes>
            <Route path="/" element={<MapPage view={view} />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
