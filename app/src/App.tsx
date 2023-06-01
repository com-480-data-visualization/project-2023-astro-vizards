import "./app.scss";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { Drawer, Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import Config from "@arcgis/core/config";
import { Header, SatelliteList, InfoSatellite, Tour, SatelliteListRefs, HeaderRefs } from "./components";
import { MapPage } from "./routes";
import { AboutUs } from "./routes/AboutUs/AboutUs";
import { LaunchSites } from "./routes/plots/LaunchSites/LaunchSites";

import { MapManager, Satellite } from "./utilities";
import { FilterType, SatelliteMetadata, SatelliteType } from "./types";
import { FilterList } from "./components/Sidebar/filterList";
import { ThreeDView } from "./routes/ThreeDView/ThreeDView";

import dayjs from 'dayjs';

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
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());

  const mapManager = useMemo(
    () =>
      new MapManager(setFocusedSatellite, (selectedGraphic, _this, threed) => {
        const satId = selectedGraphic.attributes.satellite_id;
        _this.setFocusedSat(satId);
        const view = threed ? _this.get3DView() : _this.getView();
        view.goTo({
          target: selectedGraphic.geometry,
          zoom: 4,
          heading: 0,
          tilt: 60,
        })

        _this.clearOrbits();
        _this.drawOrbit(
          _this.getCurrentPoints()[satId].satellite,
          satelliteManager
        );
      }),
    []
  );
  const satelliteManager = useMemo(() => {
    const satMan = new Satellite(setSatellites, setMetadata, (satellites) => {
      mapManager.removeAllPoints();
      mapManager.drawInitialPoints(satellites);
    });
    return satMan;
  }, [mapManager]);

  const [filters, setFilters] = useState<FilterType>({'in_active' : [true]});

  useEffect(() => {
    mapManager.clearAllPoints();
    mapManager.showPoints(satellites, satelliteManager);
  }, [satellites]);

  useEffect(() => {
    const points = mapManager.getCurrentPoints();
    satelliteManager.updatePositionSatellite(points, currentDate.toDate());
    console.dir('Updating points');
  } ,[currentDate]);

  const onCloseDrawer = (e: any) => {
    setFocusedSatellite(-1);
    const filter_new = filters;
    delete filter_new["id"];
    setFilters(filter_new);
    satelliteManager.filter(filter_new);
  };

  const [tourOpen, setTourOpen] = useState<boolean>(true);

  const [
    leftSideBarRef,
    rightSideBarRef,
    headerRef,
    restartTourRef,
    realTimeRef,
  ] = [useRef(null), useRef<SatelliteListRefs>(null), useRef<HeaderRefs>(null), useRef(null), useRef(null)];

  return (
    <Layout className="app">
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} ref={headerRef} setTourOpen={setTourOpen}/>
      <Layout>
        <FilterList
          metadata={metadata}
          satelliteManager={satelliteManager}
          filters={filters}
          setFilters={setFilters}
          ref={leftSideBarRef}
        />
        <Layout className="app__content">
          <Routes>
            <Route path="/" element={<MapPage mapManager={mapManager} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/three-d-view" element={<ThreeDView mapManager={mapManager}/>} />
            <Route path="/launch-sites" element={<LaunchSites />} />
          </Routes>
        </Layout>
        <SatelliteList
          satellites={satellites}
          satelliteManager={satelliteManager}
          filters={filters}
          ref={rightSideBarRef}
          setFilters={setFilters}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          focusedSatellite={focusedSatellite}
          setFocusedSatellite={setFocusedSatellite}
        />
      </Layout>
      <Drawer open={focusedSatellite >= 0} onClose={onCloseDrawer} mask={false}>
        <InfoSatellite data={satelliteManager.getInfo(focusedSatellite)} />
      </Drawer>
      {rightSideBarRef.current && headerRef.current && (
        <Tour
          open={tourOpen}
          setOpen={setTourOpen}
          restartTourButton={headerRef.current.restartTour as MutableRefObject<null>}
          leftSideBar={leftSideBarRef}
          rightSideBar={rightSideBarRef.current.rightSideBar as MutableRefObject<null>}
          twodView={headerRef.current.twodViewRef as MutableRefObject<null>}
          threedView={headerRef.current.threedViewRef as MutableRefObject<null>}
          realTime={headerRef.current.realTime as MutableRefObject<null>}
          activeSats={rightSideBarRef.current.activeSats as MutableRefObject<null>}
        />
      )
      }
    </Layout>
  );
}

export default Home;
