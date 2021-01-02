import React from 'react';
import { isValidLetter } from '../utils';

export default function Tray(props) {
  const { tray, setTrayState } = props;

  function handleTileClicked(i) {
    const letter = prompt("Please enter a letter:");
    if (!letter || !isValidLetter(letter)) return;
    tray[i] = letter;
    setTrayState({ tray });
  }

  return (
    <div className='tray'>
      { tray.map((letter, i) => (
        <div
          className='tile square'
          key={i}
          onClick={() => handleTileClicked(i)}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
