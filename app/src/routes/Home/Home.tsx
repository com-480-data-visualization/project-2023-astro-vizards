import "./home.scss";
import Map from "@arcgis/core/Map.js";
import Config from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import WebMap from "@arcgis/core/WebMap";
interface PointCoordinates {
  longitude: number;
  latitude: number;
}

// Read more about symbol here: https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html
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
const runOnClick = (e: __esri.ViewClickEvent) => null;

function Home() {
  const mapDiv = useRef(null);

  useEffect(() => {
    Config.apiKey =
      "AAPK1f6518e2b8eb428fbfacdb052c7ae46fBc6HgV5-adthrrY302f_qj1JtbLKYYV_9JKnXXR5OjnDaow1DiWmSzJHgmrj4xZ0";

    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "aa1d3f80270146208328cf66d022e09c",
        },
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
      });

      const bookmarks = new Bookmarks({
        view,
        // allows bookmarks to be added, edited, or deleted
        editingEnabled: true,
      });

      const bkExpand = new Expand({
        view,
        content: bookmarks,
        expanded: true,
      });

      // Add the widget to the top-right corner of the view
      view.ui.add(bkExpand, "top-right");
      const graphicsLayer = new GraphicsLayer();

      webmap.add(graphicsLayer);
      webmap.when(() => {
        console.log("Hello");
        console.log(view.center.longitude + " " + view.center.latitude);

        if (webmap.bookmarks && webmap.bookmarks.length) {
          console.log("Bookmarks: ", webmap.bookmarks.length);
        } else {
          console.log("No bookmarks in this webmap.");
        }
      });

      let p: Point | undefined;
      let g: Graphic | undefined;

      view.on("click", (e) => {
        g !== undefined && graphicsLayer.remove(g);
        p = new Point({
          longitude: e.mapPoint.longitude,
          latitude: e.mapPoint.latitude,
        });
        g = new Graphic({
          geometry: p,
          symbol: simpleMarkerSymbolDark,
        });
        graphicsLayer.add(g);
      });
    }
  }, []);

  return (
    <>
      <div id="viewDiv" ref={mapDiv}></div>
    </>
  );
}

export default Home;
