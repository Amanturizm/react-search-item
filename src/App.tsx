import React, {useState} from 'react';
import './App.css';
import Cell from './components/Cell/Cell';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
}

const App = () => {
  const defaultCells: ICell[] = [];

  for (let i: number = 1; i <= 36; i++) {
    defaultCells.push({hasItem: false, clicked: false});
  }

  const [cells, setCell] = useState<ICell[]>(defaultCells);


  return (
    <div className="App">
      {
        cells.map((cell: ICell, index: number) => {
          return <Cell key={index}/>
        })
      }
    </div>
  );
}

export default App;
