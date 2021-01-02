import React from 'react';
import Row from './Row';

export default function Board(props) {
  const { board, setAppState } = props;


  function handleTileClicked(e) {
    if (!e.target.className.includes('square')) {
      return;
    }

    const location = e.target.id.split(',');

    if (e.target.className.includes('tile')) {
      board.spaces[location[0]][location[1]].tile = null;
    } else {
      var letter = prompt("Please enter a letter:");
      if (!isValidLetter(letter)) return;
      board.spaces[location[0]][location[1]].tile = {
        letter: letter,
      }
    }

    setAppState({ board });
  }

  function isValidLetter(letter) {
    return letter.length === 1 && letter.match(/[A-Z]/g);
  }

  return (
    <div onClick={handleTileClicked}>
      { board.spaces && board.spaces.map((row, i) => <Row row={row} y={i} key={i}/>) }
    </div>
  );
}
