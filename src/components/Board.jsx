import React, { useState } from 'react';
import Square from "./Square";


const Board = () =>{
    const [state, setState] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = () => {
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
            if (state[a]!=null && state[a] ===    state[b] && state[a] ===    state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const isWinner = calculateWinner();

    const handleClick = (index) => {
        if (state[index] || isWinner) {
            return;
        }
        const newBoard = [...state];
        newBoard[index] = isXNext ? "X" : "O";
        setState(newBoard);
        setIsXNext(!isXNext);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="board-container">
            <h1 style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "10px"
            }}>Tic-Tac-Toe Game</h1>
            {isWinner ? ( <h1>Winner is {isWinner}</h1> )  : state.every((square) => square !== null) ? ( <h1>It's a draw!</h1> )  :
            (
            <>
            <h4>Player {isXNext ? "X" : "O"} turn</h4>
            <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]}/>
                <Square onClick={() => handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(3)} value={state[3]}/>
                <Square onClick={() => handleClick(4)} value={state[4]}/>
                <Square onClick={() => handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(6)} value={state[6]}/>
                <Square onClick={() => handleClick(7)} value={state[7]}/>
                <Square onClick={() => handleClick(8)} value={state[8]}/>
            </div>
            </>)}
            <button onClick={handleReset} 
            style={{
                backgroundColor: isWinner? isWinner === "X"? "green" : "red" : "white",
                color: isWinner ? "white" : "black",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "20px 0",
                transition: "background-color 0.3s ease-in-out",
                boxShadow: isWinner? isWinner === "X"? "0 0 10px green" : "0 0 10px red" : "none"
            }}>Play Again</button>
        </div>
    );
};

export default Board;