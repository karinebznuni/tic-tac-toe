import "./Board.css";
import Square from "./Square";
import { useState } from "react";

export default function Board({ isX, setIsSubmitted }) {
   const [xIsNext, setXIsNext] = useState(isX);
   const [squares, setSquares] = useState(Array(9).fill(null));

   function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
         return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
         nextSquares[i] = "X";
      } else {
         nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
   }

   const restartGame = () => {
      setIsSubmitted(false);
      setSquares(Array(9).fill(null));
   };

   const winner = calculateWinner(squares);
   let status;
   let filled = true;
   squares.map((square) => {
      if (square === null) {
         filled = false;
      }
   });

   if (winner) {
      status = "Winner: " + winner;
   } else if (filled) {
      status = "It is a tie";
   } else {
      status = "Next player is: " + (xIsNext ? "X" : "O");
   }

   return (
      <>
         <div className="board">
            <div className="status">{status}</div>
            <div className="gamezone">
               <div className="board-row">
                  <Square
                     value={squares[0]}
                     onSquareClick={() => handleClick(0)}
                  ></Square>
                  <Square
                     value={squares[1]}
                     onSquareClick={() => handleClick(1)}
                  ></Square>
                  <Square
                     value={squares[2]}
                     onSquareClick={() => handleClick(2)}
                  ></Square>
               </div>
               <div className="board-row">
                  <Square
                     value={squares[3]}
                     onSquareClick={() => handleClick(3)}
                  ></Square>
                  <Square
                     value={squares[4]}
                     onSquareClick={() => handleClick(4)}
                  ></Square>
                  <Square
                     value={squares[5]}
                     onSquareClick={() => handleClick(5)}
                  ></Square>
               </div>
               <div className="board-row">
                  <Square
                     value={squares[6]}
                     onSquareClick={() => handleClick(6)}
                  ></Square>
                  <Square
                     value={squares[7]}
                     onSquareClick={() => handleClick(7)}
                  ></Square>
                  <Square
                     value={squares[8]}
                     onSquareClick={() => handleClick(8)}
                  ></Square>
               </div>
            </div>
            <button className="restart-btn" onClick={() => restartGame()}>
               Restart
            </button>
         </div>
      </>
   );
}

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
         squares[a] &&
         squares[a] === squares[b] &&
         squares[a] === squares[c]
      ) {
         return squares[a];
      }
   }
   return null;
}
