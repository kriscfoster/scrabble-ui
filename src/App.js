import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Board from './components/Board';
import Tray from './components/Tray';

const apiUrl = 'http://localhost:8080';

export default function App() {
  const [boardState, setBoardState] = useState({
    board: {},
  });

  const [trayState, setTrayState] = useState({
    tray: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  });

  useEffect(() => {
    fetch(`${apiUrl}/boards`).then((res) => res.json()).then((board) => setBoardState({ board }));
  }, [setBoardState]);

  function calculateMoves() {
    const data = { board: boardState.board, tray: trayState.tray };
    console.log(data);
    fetch(`${apiUrl}/intelligence`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
    .then((body) => console.log(body));
  }

  return (
    <div className='App'>
      <div className='container'>
        <Board board={boardState.board} setBoardState={setBoardState}/>
        <Tray tray={trayState.tray} setTrayState={setTrayState}/>
        <Button variant="primary" onClick={() => calculateMoves()}>Calculate Moves</Button>
      </div>
    </div>
  );
}
