import React from 'react';

interface IProps {
  count: number | string;
}

const Counter: React.FC<IProps> = ({count}) => {
  return (
    <div>Tries: {count}</div>
  );
};

export default Counter;