export interface PlanetType {
  title: string;
  id: number;
}

export interface MoonType {
  title: string;
  id: number;
  planetId: number;
}
