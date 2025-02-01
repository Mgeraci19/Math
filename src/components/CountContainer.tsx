// CountContainer.tsx
import React from 'react';
import './CountContainer.css'
interface CountContainerProps {
  count: number;
}

export const CountContainer: React.FC<CountContainerProps> = ({ count }) => {
  return (
    <div className='count-container'>
      {count}
    </div>
  );
};