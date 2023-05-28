import React from 'react';
import './Cells.css';
import snail from './snail.png';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
};

interface IProps {
  cells: ICell[];
  onClickHandler: (index: number) => void;
  winning: boolean;
};

const Cell: React.FC<IProps> = ({cells, onClickHandler, winning}) => {
  return (
    <div style={winning ? {pointerEvents: 'none'} : {}} className="Cells">
      {
        cells.map((cell: ICell, index: number) => {
          return (
            <div
              key={index}
              className={`Cell ${cell.clicked ? 'clickedCell' : null}`}
              style={cell.hasItem ? {animation: 'none'} : {}}
              onClick={() => onClickHandler(index)}
            >
              {
                cell.hasItem
                  ? <img src={snail} className="snail" alt="snail"/>
                  : null
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default Cell;