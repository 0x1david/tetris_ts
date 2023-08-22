import { GameBoard } from './model/board';
import { BlockFactory } from './model/blocks';
import { Physics } from './model/physics'
import { Rules } from './model/rules'

var gameBoard = new GameBoard
var test_block = BlockFactory.createRandomBlock()
console.log(test_block.getXCoords())
