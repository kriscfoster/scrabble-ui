import React from 'react';

export default function Space(props) {
  const { space, x, y } = props;
  const { tile } = space;

  let className = 'square ';
  if (tile != null) {
    className += 'tile ';
  }
  
  if (space.spaceType === 'TRIPLE_WORD') {
    className += 'triple-word';
  } else if (space.spaceType === 'DOUBLE_WORD') {
    className += 'double-word';
  } else if (space.spaceType === 'TRIPLE_LETTER') {
    className += 'triple-letter';
  } else if (space.spaceType === 'DOUBLE_LETTER') {
    className += 'double-letter';
  }

  return (
    <div className={className} id={`${y},${x}`}>{tile && tile.letter}</div>
  )
}
