import React from 'react';
import Space from './Space';

export default function Row(props) {
  const { row, y } = props;

  return (
    <div>
      { row.map((space, i) => <Space space={space} x={i} y={y} key={i}/>) }
    </div>
  );
}
