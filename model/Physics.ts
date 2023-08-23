class Physics {
    private collision: boolean;

    public positionCalculation(board: Board, block: Block): boolean {
        this.collision = block.xcoords.some(xcoord =>
            board.boardState[xcoord].some(ycoord =>
                block.ycoords.includes(ycoord)
            )
        );
        return this.collision;
    }

    public falling(block: Block): Block {
        block.ycoords.forEach((coordinate, index, coords) => {
            coords[index] = coordinate - 1;
        });
        return block;
    }

    // 1 = Left, 2 = Right
    public sideways(board: Board, block: Block, direction: number): Block {
        if (direction === 1 && !(block.xcoords.some(xcoord => xcoord === 0))) {
            block.xcoords.forEach((coordinate, index, coords) => {
                coords[index] = coordinate - 1;
            });
        } else if (direction === 2 && !(block.xcoords.some(xcoord => xcoord === board.columns - 1))) {
            block.xcoords.forEach((coordinate, index, coords) => {
                coords[index] = coordinate + 1;
            });
        }
        return block;
    }

    public turnAround(board: Board, block: Block): Block {
		
    }
}
export { Physics };

