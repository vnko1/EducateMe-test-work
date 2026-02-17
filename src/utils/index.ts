import type { PlanetType } from '@/types/common.types';

export const createPlanetsObj = (planets: PlanetType[]) =>
  planets.reduce(
    (acc, { title }) => {
      acc[title] = [];
      return acc;
    },
    {} as Record<string, number[]>
  );

export const stateCb =
  (planet: string, moonId: number) => (cState: ReturnType<typeof createPlanetsObj>) => {
    const planetMoons = cState[planet];

    const updMoons = planetMoons.includes(moonId)
      ? planetMoons.filter((el) => el !== moonId)
      : [...planetMoons, moonId];

    return {
      ...cState,
      [planet]: updMoons,
    };
  };
