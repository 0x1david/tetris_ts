
class Rules {
    static readonly INITIAL_SPEED_INCREMENT = 0.8;
    static speedIncrement: number = Rules.INITIAL_SPEED_INCREMENT;
    static endOfGame = false;

    private static lineClear(board: Board): void {
        for (let row = 0; row < board.rows; row++) {
            if (Array.from({ length: board.columns }, (_, col) => col)
                     .every(col => board.boardState[col][row] === 1)) {
                // Add Points
                for (let col = 0; col < board.columns; col++) {
                    board.boardState[col][row] = 0;
                }
                Rules.speedUp();
            }}}
    private static speedUp(): void {
        Rules.speedIncrement *= 0.99;
    }
    private static gameOver(board: Board): boolean {
        for (let col = 0; col < board.columns; col++ ) {
            if (board.boardState[col][0] !== 0) {
                return true
            }}
        return false
    }
    
}
// Clearing lines when the whole row is 1 (after collision)
// Game over (When blocks reach the top)
// Score counter
// Game getting faster with time
