import { FilterType, SatelliteMetadata, SatelliteType } from "../types";
import {
  degreesLat,
  degreesLong,
  eciToGeodetic,
  EciVec3,
  gstime,
  propagate,
  twoline2satrec,
} from "satellite.js";
import "moment";
import moment from "moment";

class Satellite {
  private setSatellites: React.Dispatch<React.SetStateAction<SatelliteType[]>>;
  private setMetadata: React.Dispatch<React.SetStateAction<SatelliteMetadata>>;
  private allSattelites: SatelliteType[];
  private satelliteData: any[];
  private metadata: SatelliteMetadata;
  private date: Date;

  constructor(
    setSats: React.Dispatch<React.SetStateAction<SatelliteType[]>>,
    setMetadata: React.Dispatch<React.SetStateAction<SatelliteMetadata>>
  ) {
    this.setSatellites = setSats;
    this.setMetadata = setMetadata;
    this.allSattelites = [];
    this.satelliteData = [];
    this.metadata = Satellite.getEmptyMetadata();
    this.date = new Date();

    this.initSatellites();
  }

  public getSatellites = () => {
    return this.allSattelites.filter((sat) => sat.selected);
  };

  public getInfo = (id: number) => {
    return id >= 0 ? this.satelliteData[id] : null;
  };

  public setDate = (date: Date) => {
    this.date = date;
  };

  public getOrbit = (id: number) => {
    // Compute period of orbit
    const satrec = twoline2satrec(
      this.satelliteData[id]["LINE1"],
      this.satelliteData[id]["LINE2"]
    );

    const line2 = this.satelliteData[id]["LINE2"] as string;
    const mo = line2.substring(52, 62);
    const period = (1.0 / parseFloat(mo)) * 24;

    const halfPeriod = period / 2.0;

    console.log("Period " + period);

    // Compute sampling points
    // const N = 30;
    // const FACTOR = 0.925;
    // const initial = moment(this.date).subtract(halfPeriod * FACTOR, 'h');
    // const end = moment(this.date).add(halfPeriod * FACTOR, 'h');
    // const step = moment.duration(end.diff(initial)).asHours() / N;

    // Algorithm start from the current satellite position and try to find points
    // until reaching the border of the map (-180, 180) in the latitude.
    // Not perfect, but should fix the issue with the lines
    var i = 0;
    var sign = -1;
    var points_final: any = [];
    var points: any = [];
    const MAX_N = 100;
    const initial = moment(this.date);
    while (true) {
      const step = period * 0.01;
      const current_date = moment(initial)
        .add(step * i * sign, "h")
        .toDate();

      const positionAndVelocity = propagate(satrec, current_date);
      const positionEci = positionAndVelocity.position as EciVec3<number>;
      var gmst = gstime(current_date);
      const positionGd = eciToGeodetic(positionEci as EciVec3<number>, gmst);
      const longitudeDeg = degreesLong(positionGd.longitude);
      const latitudeDeg = degreesLat(positionGd.latitude);

      if (i === 0) {
        points.push([longitudeDeg, latitudeDeg]);
        console.dir([longitudeDeg, latitudeDeg]);
        i += 1;
        continue;
      }

      if (i >= MAX_N) {
        points_final = points;
        break;
      }

      if (
        Math.sign(longitudeDeg) !== Math.sign(points[i - 1][0]) &&
        Math.abs(longitudeDeg) > 100
      ) {
        if (sign === -1) {
          points_final = points.reverse();
          console.dir(points_final);
          i = 0;
          sign = 1;
          points = [];
        } else {
          console.log("Points right");
          console.dir(points);
          points_final = points_final.concat(points.slice(1));
          break;
        }
      } else {
        points.push([longitudeDeg, latitudeDeg]);
        i += 1;
      }
    }

    // for (let i=0; i<N+1; i++) {
    //   const current_date = moment(initial).add(step * i, 'h').toDate();

    //   const positionAndVelocity = propagate(satrec, current_date);
    //   const positionEci = positionAndVelocity.position as EciVec3<number>;
    //   var gmst = gstime(current_date);
    //   const positionGd = eciToGeodetic(positionEci as EciVec3<number>, gmst);
    //   const longitudeDeg = degreesLong(positionGd.longitude);
    //   const latitudeDeg = degreesLat(positionGd.latitude);
    //   points.push([longitudeDeg, latitudeDeg]);
    // }

    console.dir(points_final);
    return points_final;
  };

  public filter = (filters: FilterType) => {
    const entries = Object.entries(filters);
    for (let i = 0; i < this.allSattelites.length; i++) {
      const sat = this.allSattelites[i] as any;
      const sat_data = this.satelliteData[i] as any;
      if (entries.length === 0) {
        sat.selected = true;
        continue;
      }

      var selected = true;
      for (let j = 0; j < entries.length; j++) {
        const filter_key = entries[j][0];
        const filter_val = entries[j][1];
        const isValid =
          filter_key === "id"
            ? filter_val.includes(sat[filter_key])
            : filter_val.includes(sat_data[filter_key]);
        selected = selected && isValid;
      }

      sat.selected = selected;
    }

    this.setSatellites(this.getSatellites());
  };

  private updateLocation = () => {
    // Process data
    const sats_data = this.satelliteData;
    const sats: SatelliteType[] = [];
    var gmst = gstime(this.date);
    for (let i = 0; i < sats_data.length; i++) {
      // Compute information of the satellites given the current time
      const satrec = twoline2satrec(
        sats_data[i]["LINE1"],
        sats_data[i]["LINE2"]
      );
      const positionAndVelocity = propagate(satrec, this.date);
      const positionEci = positionAndVelocity.position;

      const positionGd = eciToGeodetic(positionEci as EciVec3<number>, gmst);
      const longitudeDeg = degreesLong(positionGd.longitude);
      const latitudeDeg = degreesLat(positionGd.latitude);

      sats.push({
        id: i,
        name: sats_data[i]["Official Name of Satellite"],
        longitude: longitudeDeg,
        latitude: latitudeDeg,
        selected: true,
      });

      const sat = sats_data[i];
      // Save metadata
      const addUnique = (field: string, val: string) => {
        if (!(this.metadata as any)[field].includes(val)) {
          (this.metadata as any)[field].push(val);
        }
      };
      addUnique(
        "Country/Organization of UN Registry",
        sat["Country/Organization of UN Registry"]
      );
      addUnique("Operator/Owner", sat["Operator/Owner"]);
      addUnique("Users", sat["Users"]);
      addUnique("Purpose", sat["Purpose"]);
      addUnique("Contractor", sat["Contractor"]);
    }

    this.allSattelites = sats;
    this.setMetadata(this.metadata);
    this.setSatellites(sats);
  };

  private initSatellites = () => {
    const dataFetch = async () => {
      // Fetch data
      var sats_data = await (await fetch("web_data.json")).json();
      // Sort by name
      sats_data = sats_data.sort((a: any, b: any) =>
        a["Official Name of Satellite"] < b["Official Name of Satellite"]
          ? -1
          : a["Official Name of Satellite"] > b["Official Name of Satellite"]
            ? 1
            : 0
      );

      const truncated_sat_data: any[] = [];
      for (let i = 0; i < 615; i++) {
        truncated_sat_data.push(sats_data[i]);
      }

      this.satelliteData = truncated_sat_data;

      this.updateLocation();
    };

    dataFetch();
  };

  static getEmptyMetadata() {
    return {
      "Country/Organization of UN Registry": [],
      Users: [],
      Purpose: [],
      Contractor: [],
      "Operator/Owner": [],
    };
  }
}

export { Satellite };
