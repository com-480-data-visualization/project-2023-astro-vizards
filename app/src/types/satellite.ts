export type SatelliteType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  selected?: boolean;
};

export type SatelliteMetadata = {
  "Country/Organization of UN Registry": string[];
  Users: string[];
  Purpose: string[];
  Contractor: string[];
  "Operator/Owner": string[];
};
