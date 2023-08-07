import React from 'react'
import { useState } from 'react'
import GameBoard from './GameBoard'

const initialBoard = Array(9).fill(null)

const TicTacToe = () => {


    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [winner,setWinner] = useState(null)
    const [winningCells, setWinningCells] = useState([])
    const [board, setBoard] = useState(initialBoard)

    const checkWinner = (board) =>{
        const winningConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
        for(let condition of winningConditions){
            const [x,y,z] = condition
            if(board[x] && board[x]=== board[y] && board[x]==board[z]){
                setWinner(board[x])
                setWinningCells([x,y,z])
                return
            }     
        }

        if(board.every((cell) => cell !== null)){
            setWinner('draw')
        }
    }

    const handleCellClick = index =>{
        if(board[index] || winner){
            return
        }
        const newBoard = [...board]
        newBoard[index] = currentPlayer
        setBoard(newBoard);
        checkWinner(newBoard)
        setCurrentPlayer(currentPlayer ==='X' ? 'O' : 'X')
    }

    const resetGame = () =>{
        setBoard(initialBoard)
        setCurrentPlayer("X")
        setWinner(null)
        setWinningCells([])
    }


  return (
    <div className='ticTacToe'>
        <h1 className='title'>Tic-Tac-Toe</h1>
        <GameBoard currentPlayer={currentPlayer} winner={winner} winningCells={winningCells} board={board} 
        handleCellClick={handleCellClick} resetGame={resetGame} />
      
    </div>
  )
}

export default TicTacToe
