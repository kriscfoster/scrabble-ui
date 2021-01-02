import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import Tray from './components/Tray';

function App() {
  const [boardState, setBoardState] = useState({
    board: {},
  });

  const [trayState, setTrayState] = useState({
    tray: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  });

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/boards';
    fetch(apiUrl).then((res) => res.json()).then((board) => setBoardState({ board }));
  }, [setBoardState]);

  return (
    <div className='App'>
      <div className='container'>
        <Board board={boardState.board} setBoardState={setBoardState}/>
        <Tray tray={trayState.tray} setTrayState={setTrayState}/>
      </div>
    </div>
  );
}
export default App;
