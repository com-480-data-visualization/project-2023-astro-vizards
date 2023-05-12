import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "1d52e8b6d39a157e";
//need to execute: npm install "https://api.observablehq.com/d/1d52e8b6d39a157e@77.tgz?v=3"
//and also: npm install @observablehq/runtime

export const LaunchSites = () => {
  const viewofLongitudeRef = useRef(null);
  const earthPlotRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name: string) => {
      if (name === "viewof longitude") return new Inspector(viewofLongitudeRef.current);
      if (name === "earthPlot") return new Inspector(earthPlotRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofLongitudeRef} />
      <div ref={earthPlotRef} />
      <p>Credit: <a href="https://observablehq.com/d/1d52e8b6d39a157e@77">Untitled by dataviz</a></p>
    </>
  );
}

export default LaunchSites;