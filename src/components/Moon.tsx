import React, { type ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
}

const Moon: React.FC<Props> = ({ className = '', title, ...props }) => (
  <button {...props} className={`moon ${className}`}>
    {title}
  </button>
);

export default Moon;
