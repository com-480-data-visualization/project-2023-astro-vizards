import "./map.scss";

import React, { FC, useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import { MapManager } from "../../utilities";
interface MapPageProps {
  mapManager: MapManager;
}

const MapPage = ({ mapManager }: MapPageProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    mapManager.attachToContainer(ref);
  }, []);

  return <div className="home__map" ref={ref}></div>;
};

export { MapPage };
