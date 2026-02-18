import type { PlanetType } from '@/types/common.types';

export const createPlanetsObj = (planets: PlanetType[]) =>
  planets.reduce(
    (acc, { title }) => {
      acc[title] = [];
      return acc;
    },
    {} as Record<string, number[]>
  );
