// Modifiers.tsx
import React from 'react';
import './Modifiers.css';

interface ModifierProps {
  clickHandler: () => void;
  name: string;
}

export const Modifier: React.FC<ModifierProps> = ({ clickHandler, name }) => {
  return (
    <button className='modifier' onClick={clickHandler}>
      {name}
    </button>
  );
};