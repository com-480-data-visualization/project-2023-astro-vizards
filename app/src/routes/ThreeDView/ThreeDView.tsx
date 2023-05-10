import "./threedview.scss";

import { useEffect, useRef } from "react";
import { MapManager } from "../../utilities";
interface ThreeDViewProps {
  mapManager: MapManager;
}

const ThreeDView = ({ mapManager }: ThreeDViewProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    mapManager.attach3DToContainer(ref);
  }, []);

  return <div className="home__map" ref={ref}></div>;
};

export { ThreeDView };
