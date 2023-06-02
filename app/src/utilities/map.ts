import SceneView from "@arcgis/core/views/SceneView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import PointSymbol3D from "@arcgis/core/symbols/PointSymbol3D";
import Map from "@arcgis/core/Map";
import React from "react";
import { SatelliteType } from "../types";
import { Satellite } from "./satellite";
import { Satellite as satelliteIcon } from "../images";
import MapView from "@arcgis/core/views/MapView";
import SatelliteSvg from "../images/icons/satellite.svg"

const getTextSymbol: (id: number, threed:boolean) => (SimpleMarkerSymbol | PointSymbol3D) 
= (id, threed) => {
  if(threed === false) {
    const symbol = new SimpleMarkerSymbol();
    symbol.set("path", satelliteIcon)
    symbol.set("id", id);
    symbol.set("color", "red");
    symbol.set("outline", {
      color: "black",
      width: 0.5,
    });
    symbol.set("size", 12);
    return symbol;
  }
  const symbol = new PointSymbol3D();
  symbol.set("id", id);
  symbol.set("symbolLayers", [
    {
      type: "icon",
      size: 16,
      resource: { href: SatelliteSvg },
      material: { color: "red" },
      outline: { color: "red", size: "4px" }
    }
  ]);
  return symbol;
};

const returnClickHandler = (
  onClick: (selectedGraphic: Graphic, _this: MapManager, threed: boolean) => void,
  tempThis: MapManager,
  threed: boolean = false,
) => function(event:__esri.ViewClickEvent) {
  var screenPoint = {
    x: event.x,
    y: event.y,
  };
  // Search for graphics at the clicked location
  const view = threed ? tempThis.get3DView() : tempThis.getView();
  view.hitTest(screenPoint).then((response) => {
    if (response.results.length < 1) return;
    const selectedGraphic = response.results[0];
    if (selectedGraphic !== undefined && !selectedGraphic.type) return;
    if (selectedGraphic.type !== "graphic") return;
    // Callback
    onClick(selectedGraphic.graphic, tempThis, threed);
  });
};

class MapManager {
  private view: MapView;
  private threeDView: SceneView;
  private current_points: Record<
    number,
    { graphic: Graphic[]; satellite: SatelliteType }
  >;
  private graphicsLayers: GraphicsLayer[];
  private current_orbits: Record<number, Graphic>;
  public setFocusedSat: React.Dispatch<React.SetStateAction<number>>;
  constructor(
    setFocusedSattelite: React.Dispatch<React.SetStateAction<number>>,
    onClick: (selectedGraphic: Graphic, _this: MapManager, threed: boolean) => void
  ) {
    /**
     * Initialize application
     */
    this.graphicsLayers = [new GraphicsLayer(), new GraphicsLayer()];
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
      zoom: 2,
    });
    this.threeDView = new SceneView({
      container: undefined,
      viewingMode: "global",  
      map: new Map({
        basemap: "hybrid",
      }),
    });
    this.view.map.add(this.graphicsLayers[0]);
    this.threeDView.map.add(this.graphicsLayers[1]);
    const tempThis = this;
    this.view.on("click", returnClickHandler(onClick, tempThis));
    this.threeDView.on("click", returnClickHandler(onClick, tempThis, true));
  }
  attachToContainer = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current === null) return;
    const val = 150133097626 / ref.current.clientWidth;
    this.view.set("container", ref.current);
    // When map is ready
    this.view.when(() => {
      this.view.scale = val;
    }
    );
  };

  attach3DToContainer = (ref: React.RefObject<HTMLDivElement>) => {
    this.threeDView.set("container", ref.current);
  };

  removeAllPoints = () => {
    this.current_points = [];
    this.graphicsLayers[0].removeAll();
    this.graphicsLayers[1].removeAll();
  }

  clearAllPoints = () => {
    this.view.graphics.removeAll();
    this.threeDView.graphics.removeAll();
    for (const layer of this.graphicsLayers) {
      for (let i = 0; i < layer.graphics.length; i++) {
        layer.graphics.getItemAt(i).visible = false;
      }
    }
  };

  clearOrbits = () => {
    for (const layer of [this.view, this.threeDView]) {
      for (let i = layer.graphics.length-1; i >= 0 ; i--) {
        const item = layer.graphics.getItemAt(i);
        console.dir(item);
        if (item.geometry.type === "polyline") {
          layer.graphics.removeAt(i);
        } else {
          break
        }
      }
    }
  }

  drawInitialPoints = (satellites: SatelliteType[]) => {
    for (let i = 0; i < satellites.length; i++) {
      const satellite = satellites[i];
      const p = new Point({
        longitude: satellite.longitude,
        latitude: satellite.latitude,
      });
      const g = new Graphic({
        symbol: getTextSymbol(satellite.id,false),
        geometry: p,
        attributes: {
          satellite_id: satellite.id,
        },
      });
      const g2 = new Graphic({
        symbol: getTextSymbol(satellite.id,true),
        geometry: p,
        attributes: {
          satellite_id: satellite.id,
        },
      });
      this.graphicsLayers[0].add(g);
      this.graphicsLayers[1].add(g2);
      this.current_points[satellite.id] = {
        graphic: [g, g2],
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
    let g2 = new Graphic({
      geometry: polyline,
      symbol: polylineSymbol,
      attributes: polylineAtt,
    });

    this.threeDView.graphics.add(g2);
    this.view.graphics.add(g);
  };

  showPoints = (satellites: SatelliteType[], satelliteManager: Satellite) => {
    // Draw satellites
    if (satellites.length === 0) return;

    for (let i = 0; i < satellites.length; i++) {
      if (this.current_points[satellites[i].id] !== undefined) {
        this.current_points[satellites[i].id].graphic[0].visible = true;
        this.current_points[satellites[i].id].graphic[1].visible = true;
      }
    }
    if (satellites.length < 3) {
      // Draw orbits for satellites
      satellites.forEach((satellite) => {
        this.drawOrbit(satellite, satelliteManager);
      });
    }
    // Zoom in case of having selected one satellite
    if (satellites.length === 1) {
      console.log(
        "Zooming in",
        satellites[0].id,
        this.current_points[satellites[0].id]
      );
      this.view.goTo({
        target: this.current_points[satellites[0].id].graphic[0],
        zoom: 5,
        heading: 0,
        tilt: 60,
      });
      console.log("Trying to zoom into", this.current_points[satellites[0].id].graphic[1])
      this.threeDView.goTo({
        target: this.current_points[satellites[0].id].graphic[1],
        zoom: 4,
        heading: 0,
        tilt: 60,
      })
    } else {
      this.view.goTo({
        // Center the view on world center
        target: [0, 0],
        zoom: 3,
        heading: 0,
        tilt: 0,
      })
      this.threeDView.goTo({
        // Center the view on world center
        target: [0, 0],
        zoom: 2,
        heading: 0,
        tilt: 0,
      })
    }
  };

  getView = () => this.view;

  get3DView = () => this.threeDView;

  getCurrentPoints = () => this.current_points;
}

export { MapManager };
