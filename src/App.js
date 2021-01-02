import React, { useEffect, useState } from 'react';
import Board from './components/Board';

function App() {
  const [appState, setAppState] = useState({
    board: {},
  });

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/boards';
    fetch(apiUrl).then((res) => res.json()).then((board) => setAppState({ board }));
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <Board board={appState.board} setAppState={setAppState}/>
      </div>
    </div>
  );
}
export default App;
