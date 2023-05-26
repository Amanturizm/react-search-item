import React, {useState} from 'react';
import './App.css';
import Cells from './components/Cells/Cells';
import Counter from './components/Counter/Counter';
import Winning from './components/Winning/Winning';

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
  const [winning, setWinning] = useState<boolean>(false);

  const incrementCount = (index: number): void => {
    const cellsCopy: ICell[] = [...cells];
    const cellCopy: ICell = {...cellsCopy[index]};
    cellCopy.hasItem ? setWinning(true) : setWinning(false)
    cellCopy.clicked = true;
    cellsCopy[index] = cellCopy;
    setCount(count + 1);
    setCells(cellsCopy);
  };

  const resetGame = (): void => {
    setCount(0);
    setCells(defaultCells);
    setWinning(false);
  }

  return (
    <div className="App">
      {winning ? <Winning /> : null}
      <Cells onClickHandler={(index: number) => incrementCount(index)} cells={cells} winning={winning} />
      <div className="options">
        <Counter count={count} />
        <button onClick={resetGame} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
