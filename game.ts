import { GameBoard } from './model/Board';
import { Physics, Direction } from './model/Physics';
import { Rules } from './model/Rules';
import { Block, BlockFactory } from './model/Blocks'; 
var gameBoard = new GameBoard;
gameBoard.initializeBoard()
var endgame = true;
while (!endgame) {
	var currentBlock = BlockFactory.createRandomBlock()
	while (!endgame) {
		Physics.falling(currentBlock)
		Physics.checkCollision(gameBoard, currentBlock);
		
		
		console.log(gameBoard)
	}	
}
