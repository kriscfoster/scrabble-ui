import React from 'react';

export default function Space(props) {
  const { space } = props;

  if (space.spaceType === 'TRIPLE_WORD') {
    return <div className="square triple-word" />
  } else if (space.spaceType === 'DOUBLE_WORD') {
    return <div className="square double-word" />
  } else if (space.spaceType === 'TRIPLE_LETTER') {
    return <div className="square triple-letter" />
  } else if (space.spaceType === 'DOUBLE_LETTER') {
    return <div className="square double-letter" />
  } else {
    return <div className="square"/>;
  }
}
