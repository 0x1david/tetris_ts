class GameBoard {
    readonly columns: number;
    readonly rows: number;
    _boardState: number[][] = [];

    constructor(rows = 20, columns = 10) {
        this.columns = columns;
        this.rows = rows;
        this.initializeBoard();
    }

    public initializeBoard(): void {
        this._boardState = Array.from({ length: this.rows }, () =>
            Array(this.columns).fill(0)
        );

    }
    get boardState(): number[][] {
	    return this._boardState;
    }

    set boardState(newState: number[][]) {
	    this._boardState = newState;
    }
}

export {GameBoard};
