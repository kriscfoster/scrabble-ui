import React from 'react';
import Row from './Row';
import { isValidLetter } from '../utils';

export default function Board(props) {
  const { board, setBoardState } = props;


  function handleTileClicked(e) {
    if (!e.target.className.includes('square')) {
      return;
    }

    const location = e.target.id.split(',');

    if (e.target.className.includes('tile')) {
      board.spaces[location[0]][location[1]].tile = null;
    } else {
      const letter = prompt("Please enter a letter:");
      if (!letter || !isValidLetter(letter)) return;
      board.spaces[location[0]][location[1]].tile = {
        letter: letter,
      }
    }

    setBoardState({ board });
  }

  return (
    <div onClick={handleTileClicked} className='board'>
      { board.spaces && board.spaces.map((row, i) => <Row row={row} y={i} key={i}/>) }
    </div>
  );
}
