import React from 'react';

interface IProps {
  count: number | string;
}

const Counter: React.FC<IProps> = ({count}) => {
  return (
    <h2>Tries: {count}</h2>
  );
};

export default Counter;