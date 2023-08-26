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
	    return this.deepCopy(this._boardState);
    }

    set boardState(newState: number[][]) {
	    this._boardState = newState;
    }
    private deepCopy<T>(state: T[][]): T[][] {
	    return state.map(state => [...state]);
}
}

export {GameBoard};
