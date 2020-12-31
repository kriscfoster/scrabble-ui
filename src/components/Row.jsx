import React from 'react';
import Space from './Space';

export default function Row(props) {
  const { row } = props;

  return (
    <div>
      { row.map((space, i) => <Space space={space} key={i}/>) }
    </div>
  );
}
