 
class GameFlow {
	static readonly _INITIAL_SPEED_INCREMENT = 0.8;
	static _speedIncrement: number = GameFlow._INITIAL_SPEED_INCREMENT;

	public static speedUp(): void {
        GameFlow._speedIncrement *= 0.99;
    	}

	get speedIncrement(): number {
		return GameFlow._speedIncrement;
	}
}


