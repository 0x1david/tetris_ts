import { Block } from './Blocks'; 
import { GameBoard } from './Board'

enum Direction {
	Left = 1,
	Right = 2
}
class Physics {
    private static collision: boolean;

    static checkCollision(board: GameBoard, block: Block): boolean {
        this.collision = block.xCoords.some(xCoord =>
            board.boardState[xCoord].some(yCoord =>
                block.yCoords.includes(yCoord)
            )
        );
        return this.collision;
    }

    static falling(block: Block): Block {
        block.yCoords.forEach((coordinate, index, coords) => {
            coords[index] = coordinate - 1;
        });
        return block;
    }

    // 1 = Left, 2 = Right
    static sideways(board: GameBoard, block: Block, direction: Direction): Block {
        if (direction === Direction.Left && !(block.xCoords.some(xcoord => xcoord === 0))) {
            block.xCoords.forEach((coordinate, index, coords) => {
                coords[index] = coordinate - 1;
            });
        } else if (direction === Direction.Right && !(block.xCoords.some(xCoord => xCoord === board.columns - 1))) {
            block.xCoords.forEach((coordinate, index, Coords) => {
                Coords[index] = coordinate + 1;
            });
        }
        return block;
    }

    // public turnAround(board: Board, block: Block): Block {
	
    // }
}
export { Physics, Direction };

