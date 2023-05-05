import SceneView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Map from "@arcgis/core/Map";
import React from "react";
import { SatelliteType } from "../types";
import { Satellite } from "./satellite";
import { Satellite as satelliteIcon } from "../images";
import { Collection } from "typescript";
import MapView from "@arcgis/core/views/MapView";

const getTextSymbol = (id: number) => {
  const symbol = new SimpleMarkerSymbol();
  symbol.set("path", satelliteIcon);
  symbol.set("outline", null);
  symbol.set("id", id);
  symbol.set("color", "red");
  symbol.set("size", 12);
  return symbol;
};

class MapManager {
  private view: SceneView;
  private current_points: Record<
    number,
    { graphic: Graphic; satellite: SatelliteType }
  >;
  private graphicsLayers: GraphicsLayer[];
  private current_orbits: Record<number, Graphic>;
  public setFocusedSat: React.Dispatch<React.SetStateAction<number>>;
  constructor(
    setFocusedSattelite: React.Dispatch<React.SetStateAction<number>>,
    onClick: (selectedGraphic: Graphic, _this: MapManager) => void
  ) {
    /**
     * Initialize application
     */
    this.graphicsLayers = [new GraphicsLayer()];
    this.current_orbits = [];
    this.setFocusedSat = setFocusedSattelite;
    console.log("Constructing map.");
    this.current_points = [];
    const map = new Map({
      basemap: "hybrid",
    });
    this.view = new MapView({
      container: undefined,
      map: map,
    });
    for (const layer of this.graphicsLayers) {
      this.view.map.add(layer);
    }
    const tempThis = this;
    this.view.on("click", function(event) {
      var screenPoint = {
        x: event.x,
        y: event.y,
      };
      console.log(tempThis.view);
      // Search for graphics at the clicked location
      tempThis.view.hitTest(screenPoint).then((response) => {
        if (response.results.length < 1) return;
        const selectedGraphic = response.results[0];
        if (selectedGraphic !== undefined && !selectedGraphic.type) return;
        if (selectedGraphic.type !== "graphic") return;
        // Callback
        onClick(selectedGraphic.graphic, tempThis);
      });
    });
  }
  attachToContainer = (ref: React.RefObject<HTMLDivElement>) => {
    this.view.set("container", ref.current);
  };

  clearAllPoints = () => {
    console.log("Clearing all points.");
    this.view.graphics.removeAll();
    for (const layer of this.graphicsLayers) {
      for (let i = 0; i < layer.graphics.length; i++) {
        layer.graphics.getItemAt(i).visible = false;
      }
    }
  };

  drawInitialPoints = (satellites: SatelliteType[]) => {
    console.log("Drwaing init points, ", satellites);
    for (let i = 0; i < satellites.length; i++) {
      const satellite = satellites[i];
      const p = new Point({
        longitude: satellite.longitude,
        latitude: satellite.latitude,
      });
      const g = new Graphic({
        symbol: getTextSymbol(satellite.id),
        geometry: p,
        attributes: {
          satellite_id: satellite.id,
        },
      });
      this.graphicsLayers[0].add(g);
      this.current_points[satellite.id] = {
        graphic: g,
        satellite: satellite,
      };
    }
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

  showPoints = (satellites: SatelliteType[]) => {
    // Draw satellites
    if (satellites.length === 0) return;

    for (let i = 0; i < satellites.length; i++) {
      if (this.current_points[satellites[i].id] !== undefined) {
        this.current_points[satellites[i].id].graphic.visible = true;
      }
    }
    // Zoom in case of having selected one satellite
    if (satellites.length === 1) {
      console.log(
        "Zooming in",
        satellites[0].id,
        this.current_points[satellites[0].id]
      );
      this.view.goTo(this.current_points[satellites[0].id].graphic);
      this.view.set("zoom", 4);
    } else {
      this.view.set("zoom", 2);
    }
  };

  getView = () => this.view;

  getCurrentPoints = () => this.current_points;
}

export { MapManager };
