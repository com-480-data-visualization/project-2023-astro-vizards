import { SatelliteType } from "../types";

function randomInt(max: number) {
  return Math.ceil(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1);
}

class Satellite {
  private setSattelites: React.Dispatch<React.SetStateAction<SatelliteType[]>>;
  private allSattelites: SatelliteType[];

  static genRandomSats = (count: number) => {
    const sats: SatelliteType[] = [];

    for (let i = 0; i < count; i++) {
      sats.push({
        id: i,
        longtitude: randomInt(100),
        latitude: randomInt(50),
      });
    }
    return sats;
  };

  static getInitialSetOfSats(): SatelliteType[] {
    // Used by the App.tsx to fetch the very first state of set of Satellites
    /** PLACEHOLDER TODO: CHANGE WITH ACTUAL DATA FETCHING AND RETURN ALL THE SATS **/
    return Satellite.genRandomSats(4);
  }

  constructor(setSats: React.Dispatch<React.SetStateAction<SatelliteType[]>>) {
    this.allSattelites = Satellite.getInitialSetOfSats();
    this.setSattelites = setSats;
  }

  public getSatellites(): SatelliteType[] {
    return this.allSattelites;
  }

  public chooseSat = (sattelite: SatelliteType) => {
    this.allSattelites = [sattelite];
    console.log("All sats are now: ", this.allSattelites);
    this.setSattelites([sattelite]);
  };

  public removeFilter = () => {
    this.allSattelites = Satellite.getInitialSetOfSats();
    this.setSattelites(this.allSattelites);
  };
}

export { Satellite };
