import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => {
        return <Square key={index} value={square} onClick={() => onClick(index)} />
      })}
    </div>
  )
}

export default Board;