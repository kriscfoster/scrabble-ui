import React from 'react';
import Row from './Row';

export default function Board(props) {
  const { board } = props;

  return (
    <div>
      { board.spaces && board.spaces.map((row, i) => <Row row={row} key={i}/>) }
    </div>
  );
}
