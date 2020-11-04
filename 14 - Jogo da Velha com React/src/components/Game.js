import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game = () => {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (index) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    
    if (winner || squares[index]) return;

    squares[index] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber([historyPoint.length]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () => {
    return (
      history.map((_step, move) => {
        const destination = move ? `Voltar a jogada ${move}` : `Voltar ao início`;
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{destination}</button>
          </li>
        );
      })
    )
  };

  return (
    <>
      <h1>Jogo da Velha</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>Histórico</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Vencedor: " + winner : "Próxima Jogada: " + xO}</h3>
      </div>
    </>
  )
}

export default Game;