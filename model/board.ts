class GameBoard {
    readonly columns: number;
    readonly rows: number;
    board: number[][] = [];

    constructor(rows = 20, columns = 10) {
        this.columns = columns;
        this.rows = rows;
        this.initializeBoard();
    }

    private initializeBoard(): void {
        this.board = Array.from({ length: this.rows }, () =>
            Array(this.columns).fill(0)
        );
    }
}

export {GameBoard};
