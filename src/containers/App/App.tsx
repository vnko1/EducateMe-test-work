import { useState } from 'react';

import { moons, planets } from '@/lib';
import { createPlanetsObj, stateCb } from '@/utils';
import { Moon, Planet } from '@/components';

function App() {
  const [state, setState] = useState(createPlanetsObj(planets));

  const handleMoonClick = (planet: string, moonId: number) => () =>
    setState(stateCb(planet, moonId));

  return (
    <ul className="list">
      {planets.map((planet) => (
        <li className="list-item" key={planet.id}>
          <Planet {...planet} moons={state[planet.title]} />
          <ul>
            {moons
              .filter((moon) => moon.planetId === planet.id)
              .map((moon) => (
                <li key={moon.id}>
                  <Moon
                    title={moon.title}
                    onClick={handleMoonClick(planet.title, moon.id)}
                    className={state[planet.title].includes(moon.id) ? 'active' : ''}
                  />
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default App;
