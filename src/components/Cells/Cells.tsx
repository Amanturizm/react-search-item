import React from 'react';
import './Cells.css';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
}

interface IProps {
  cells: ICell[];
  onClickHandler: (index: number) => void;
}

const Cell: React.FC<IProps> = ({cells, onClickHandler}) => {
  return (
    <div className="Cells">
      {
        cells.map((cell: ICell, index: number) => {
          return (
            <div
              key={index}
              className={`Cell ${cell.clicked ? 'clickedCell' : null}`}
              onClick={() => onClickHandler(index)}
            >
              {cell.hasItem ? <h1 style={{userSelect: 'none'}}>O</h1> : null}
            </div>
          )
        })
      }
    </div>
  );
};

export default Cell;