import React from 'react';

interface Props {
  className?: string;
  title: string;
  moons: number[];
}

const Planet: React.FC<Props> = ({ className = '', title, moons }) => {
  return (
    <div className="planet-wrapper">
      {moons.map((moon, idx) => (
        <div
          key={moon}
          className="planet-circle"
          style={{
            width: 110 + idx * 10,
            height: 110 + idx * 10,
            inset: `-${20 + idx * 10}%`,
          }}
        />
      ))}
      <div className={`planet ${className}`}>
        {title} {moons.length || null}
      </div>
    </div>
  );
};

export default Planet;
