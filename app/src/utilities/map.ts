import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import Basemap from "@arcgis/core/Basemap.js";
import Map from "@arcgis/core/Map";
import React from "react";
import { SatelliteType } from "../types";
import { Satellite } from "./satellite";
const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40], // Orange
  outline: {
    color: [255, 255, 255], // White
    width: 1,
  },
};

const simpleMarkerSymbolDark = {
  type: "simple-marker",
  color: [226, 119, 40], // Orange
  outline: {
    color: [0, 0, 0], // White
    width: 1,
  },
};

const getTextSymbol = (name: string) => {
  return {
    type: "text", // autocasts as new TextSymbol()
    color: "white",
    haloColor: "black",
    haloSize: "1px",
    text: name,
    xoffset: 3,
    yoffset: 3,
    font: {
      // autocasts as new Font()
      size: 12,
      family: "Roboto",
      weight: "bold",
    },
  };
};

let current_points: Record<number, Graphic>;

const initMap = () => {
  /**
   * Initialize application
   */
  console.log("Constructing map.");
  current_points = [];
  // Please check https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap for all possible map variants
  const baseMap = Basemap.fromId("arcgis-nova");
  const map = new Map({
    basemap: baseMap,
  });
  const view = new MapView({
    container: undefined,
    map: map,
  });

  const graphicsLayer = new GraphicsLayer();
  view.map.add(graphicsLayer);
  return view;
};

const attachToContainer = (
  view: MapView,
  ref: React.RefObject<HTMLDivElement>
) => {
  view.set("container", ref.current);
};

const clearAllPoints = (view: MapView) => {
  view.graphics.removeAll();
  current_points = [];
};

const drawPoint = (view: MapView, satellite: SatelliteType) => {
  // console.log("drawing: ", satellite);
  const p = new Point({
    longitude: satellite.longitude,
    latitude: satellite.latitude,
  });
  const g = new Graphic({
    symbol: getTextSymbol(satellite.name),
    geometry: p,
  });
  view.graphics.add(g);
  current_points[satellite.id] = g;
};

const drawOrbit = (view: MapView, satellite: SatelliteType, satelliteManager: Satellite) => {
  const point_orbits = satelliteManager.getOrbit(satellite.id);

  let polyline = {
    type: "polyline",  // autocasts as new Polyline()
    paths: point_orbits,
    hasZ: false,
    hasM: false,
  };

  let polylineSymbol = {
    type: "simple-line",  // autocasts as SimpleLineSymbol()
    color: [226, 119, 40],
    width: 4
  };

  let polylineAtt = {
    // Name: "Keystone Pipeline",
    // Owner: "TransCanada"
  };

  let g = new Graphic({
    geometry: polyline,
    symbol: polylineSymbol,
    attributes: polylineAtt
  });
  view.graphics.add(g);
}

const drawMultiplePoints = (view: MapView, satellites: SatelliteType[], satelliteManager: Satellite) => {
  // Draw satellites
  if (satellites.length === 0) return;

  // Draw orbit if we have a few satellites
  if (satellites.length < 10) {
    satellites.forEach( (sat) => {
      drawOrbit(view, sat, satelliteManager);
    })
  }

  satellites.forEach((sat) => {
    drawPoint(view, sat);
  });

  // Zoom in case of having selected one satellite
  if (satellites.length === 1) {
    view.goTo(current_points[satellites[0].id]);
    view.set("zoom", 3);
  } else {
    view.set("zoom", 1);
  }
};

export { initMap, attachToContainer, clearAllPoints, drawMultiplePoints };
