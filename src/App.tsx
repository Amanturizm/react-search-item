import React, {useState} from 'react';
import './App.css';
import Cells from './components/Cells/Cells';
import Counter from './components/Counter/Counter';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
}

const App = () => {
  const defaultCells: ICell[] = [];

  for (let i: number = 1; i <= 36; i++) {
    defaultCells.push({hasItem: false, clicked: false});
  }

  defaultCells[Math.floor(Math.random() * defaultCells.length - 0)].hasItem = true;

  const [cells, setCells] = useState<ICell[]>(defaultCells);
  const [count, setCount] = useState<number>(0);


  const incrementCount = (index: number): void => {
    const cellsCopy: ICell[] = [...cells];
    const cellCopy: ICell = {...cellsCopy[index]};
    cellCopy.clicked = true;
    cellsCopy[index] = cellCopy;
    setCount(count + 1);
    setCells(cellsCopy);
  };

  const resetGame = (): void => {
    setCount(0);
    setCells(defaultCells);
  }

  return (
    <div className="App">
      <Cells onClickHandler={(index: number) => incrementCount(index)} cells={cells} />
      <div className="options">
        <Counter count={count} />
        <button onClick={resetGame} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
