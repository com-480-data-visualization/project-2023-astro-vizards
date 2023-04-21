import { SatelliteType } from "../types";

function randomInt(max: number) {
  return Math.ceil(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1);
}

const initSatelittes = (): SatelliteType[] => {
  /** PLACEHOLDER TODO: CHANGE WITH ACTUAL DATA FETCHING AND RETURN ALL THE SATS **/

  return [
    {
      id: 5,
      longtitude: randomInt(180),
      latitude: randomInt(90),
    },
    {
      id: 8,
      longtitude: randomInt(180),
      latitude: randomInt(90),
    },
    {
      id: 10,
      longtitude: randomInt(180),
      latitude: randomInt(90),
    },
    {
      id: 13,
      longtitude: randomInt(180),
      latitude: randomInt(90),
    },
  ];
};

const sideBarSatClick = (
  satellite: SatelliteType,
  setSatellites: React.Dispatch<React.SetStateAction<SatelliteType[]>>
) => {
  setSatellites([satellite]);
};

const sideBarRemoveFilter = (
  setSatellites: React.Dispatch<React.SetStateAction<SatelliteType[]>>
) => {
  setSatellites(initSatelittes());
};

export { initSatelittes, sideBarSatClick, sideBarRemoveFilter };
