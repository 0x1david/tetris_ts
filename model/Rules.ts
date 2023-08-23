
class Rules {
    static endOfGame = false;

    public static lineClear(board: Board): void {
        for (let row = 0; row < board.rows; row++) {
            if (Array.from({ length: board.columns }, (_, col) => col)
                     .every(col => board.boardState[col][row] === 1)) {
                // Add Points
                for (let col = 0; col < board.columns; col++) {
                    board.boardState[col][row] = 0;
                }
                Rules.speedUp();
            }}}
    public static gameOver(board: Board): boolean {
        for (let col = 0; col < board.columns; col++ ) {
            if (board.boardState[col][0] !== 0) {
                return true
            }}
        return false
    }
    
}
export { Rules };
