import "./map.scss";

import React, { FC, useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import { attachToContainer } from "../../utilities";
interface MapPageProps {
  view: MapView;
}

const MapPage = ({ view }: MapPageProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    attachToContainer(view, ref);
  }, []);

  return <div className="home__map" ref={ref}></div>;
};

export { MapPage };
