
class Physics {

    private positionCalculation(){
        let collision =  block.xcoords.some(xcoord =>
            board.boardState[xcoord].some(ycoord =>
                block.ycoords.includes(ycoord)
            ));
    }
    private falling(block: Block) void {
            block.ycoords.forEach((coordinate, index, coords) => {
                coords[index] = coordinate  - 1;
    });
    }

    // 1 = Left, 2 = Right
    static sideways(board: Board, block: Block, direction: number): void {
        if (direction === 1 && !(block.xcoords.some(xcoord => xcoord === 0))) {
            block.xcoords.forEach((coordinate, index, coords) => {
                coords[index] = coordinate - 1;
            });
        } else if (direction === 2 && !(block.xcoords.some(xcoord => xcoord === board.boardState.length - 1))) {
            block.xcoords.forEach((coordinate, index, coords) => {
                coords[index] = coordinate + 1;
            });
        }
    }
}
