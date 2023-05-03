import SceneView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Basemap from "@arcgis/core/Basemap.js";
import Map from "@arcgis/core/Map";
import React from "react";
import { SatelliteType } from "../types";
import { Satellite } from "./satellite";
import { Satellite as satelliteIcon } from "../images";

const getTextSymbol = (name: string) => {
  const symbol = new SimpleMarkerSymbol();
  symbol.set("path", satelliteIcon);
  symbol.set("outline", null);
  symbol.set("color", "white");
  symbol.set("size", 12);
  return symbol;
};

class MapManager {
  private view: SceneView;
  private current_points: Record<number, Graphic>;
  public setFocusedSat: React.Dispatch<React.SetStateAction<number>>;
  constructor(
    setFocusedSattelite: React.Dispatch<React.SetStateAction<number>>,
    onClick: (selectedGraphic: Graphic, _this: MapManager) => void
  ) {
    /**
     * Initialize application
     */
    this.setFocusedSat = setFocusedSattelite;
    console.log("Constructing map.");
    this.current_points = [];
    const map = new Map({
      basemap: "hybrid",
    });
    this.view = new SceneView({
      container: undefined,
      map: map,
    });

    const graphicsLayer = new GraphicsLayer();
    this.view.map.add(graphicsLayer);
    const tempThis = this;
    this.view.on("click", function(event) {
      var screenPoint = {
        x: event.x,
        y: event.y,
      };
      // Search for graphics at the clicked location
      tempThis.view.hitTest(screenPoint).then((response) => {
        if (response.results.length < 1) return;
        const selectedGraphic = response.results[0];
        if (selectedGraphic != undefined && !selectedGraphic.type) return;
        if (selectedGraphic.type != "graphic") return;
        onClick(selectedGraphic.graphic, tempThis);
      });
    });
  }
  attachToContainer = (ref: React.RefObject<HTMLDivElement>) => {
    this.view.set("container", ref.current);
  };

  clearAllPoints = () => {
    this.view.graphics.removeAll();
    this.current_points = [];
  };

  drawPoint = (satellite: SatelliteType) => {
    // console.log("drawing: ", satellite);
    const p = new Point({
      longitude: satellite.longitude,
      latitude: satellite.latitude,
    });
    const g = new Graphic({
      symbol: getTextSymbol("satellite_alt"),
      geometry: p,
      attributes: {
        satellite_id: satellite.id,
      },
    });
    this.view.graphics.add(g);
    this.current_points[satellite.id] = g;
  };

  drawOrbit = (satellite: SatelliteType, satelliteManager: Satellite) => {
    const point_orbits = satelliteManager.getOrbit(satellite.id);

    let polyline = {
      type: "polyline", // autocasts as new Polyline()
      paths: point_orbits,
      hasZ: false,
      hasM: false,
    };

    let polylineSymbol = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      color: [226, 119, 40],
      width: 4,
    };

    let polylineAtt = {
      // Name: "Keystone Pipeline",
      // Owner: "TransCanada"
    };

    let g = new Graphic({
      geometry: polyline,
      symbol: polylineSymbol,
      attributes: polylineAtt,
    });
    this.view.graphics.add(g);
  };

  drawMultiplePoints = (
    satellites: SatelliteType[],
    satelliteManager: Satellite
  ) => {
    // Draw satellites
    if (satellites.length === 0) return;

    // Draw orbit if we have a few satellites
    if (satellites.length < 10) {
      satellites.forEach((sat) => {
        this.drawOrbit(sat, satelliteManager);
      });
    }

    satellites.forEach((sat) => {
      this.drawPoint(sat);
    });

    // Zoom in case of having selected one satellite
    if (satellites.length === 1) {
      this.view.goTo(this.current_points[satellites[0].id]);
      this.view.set("zoom", 3);
    } else {
      this.view.set("zoom", 1);
    }
  };

  getView = () => this.view;

  getCurrentPoints = () => this.current_points;
}

export { MapManager };
