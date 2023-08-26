import { GameBoard } from './model/Board';
import { Physics, Direction } from './model/Physics';
import { Rules } from './model/Rules';
import { Block, BlockFactory } from './model/Blocks'; 

var gameBoard = new GameBoard();
gameBoard.initializeBoard();
var endgame = false;
var currentBlock = BlockFactory.createRandomBlock();  // Moved outside the while loop

function calcBoard(board: GameBoard, block: Block) {
  // Clear the board first (assuming 0 means empty)
    let tempBoard = board.boardState; 
    for (let row of tempBoard) {
    for (let i = 0; i < row.length; i++) {
      row[i] = 0;
    }
    board.boardState = tempBoard;
    }

  // Then set the new block positions
  for (let x = 0; x < 4; x++) {
    try {
      let tempBoard = board.boardState
      tempBoard[block.yCoords[x]][block.xCoords[x]] = 1;
      board.boardState = tempBoard;

    } catch (error) {
      // Do nothing and continue
    }
  }
}

function printBoard(board: GameBoard) {
  console.clear(); // Clear the console for a more interactive feel
  board.boardState.forEach(row => {
    const rowStr = row.map(cell => (cell ? "#" : ".")).join(" ");
    console.log(rowStr);
  });
}


function oneTick(): void {
  setTimeout(() => {
    Physics.falling(currentBlock);
    Physics.checkCollision(gameBoard, currentBlock);
    calcBoard(gameBoard, currentBlock);
    console.log(currentBlock.yCoords)
    printBoard(gameBoard)
    if (!endgame) {
      oneTick();
    }
  }, 1000);
}

oneTick();  // Start the ticking


