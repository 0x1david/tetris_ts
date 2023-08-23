abstract class Block {
    protected _xCoords: number[];
    protected _yCoords: number[];
    protected _color: string;

    constructor(xCoords: number[], yCoords: number[], color: string) {
        this._xCoords = xCoords;
        this._yCoords = yCoords;
        this._color = color;
    }
    get Color(): string {
        return this._color;
    }
    get xCoords(): number[] {
        return this._xCoords;
    }
    get yCoords(): number[] {
        return this._yCoords;
    }
    set xCoords(newX: number[]) {
	    this._xCoords = newX;
    }
    set yCoords(newY: number[]) {
	    this._yCoords = newY;
    }
}

class iBlock extends Block {
    constructor() {
        super([4,5,6,7], [0,0,0,0], "rgb(0, 255, 255)") // Cyan
    }
}

class oBlock extends Block {
    constructor() { 
    super([5,6,5,6], [0,0,1,1], "rgb(255, 255, 0)") // Yellow
    }
}

class tBlock extends Block {
    constructor() {
        super([5,6,7,6], [0,0,0,1], "rgb(128, 0, 128)");  // Purple
    }
}

class sBlock extends Block {
    constructor() {
        super([6,7,5,6], [0,0,1,1], "rgb(0, 255, 0)");  // Green
    }
}

class zBlock extends Block {
    constructor() {
        super([5,6,6,7], [0,0,1,1], "rgb(255, 0, 0)");  // Red
    }
}

class jBlock extends Block {
    constructor() {
        super([5,5,6,7], [0,1,1,1], "rgb(0, 0, 255)");  // Blue
    }
}

class lBlock extends Block {
    constructor() {
        super([7,5,6,7], [0,1,1,1], "rgb(255, 165, 0)");  // Orange
    }
}

class BlockFactory {
    static createRandomBlock(): Block {
        const random = Math.floor(Math.random() * 7);

        switch (random) {
            case 0: return new iBlock();
            case 1: return new oBlock();
            case 2: return new tBlock();
            case 3: return new sBlock();
            case 4: return new zBlock();
            case 5: return new jBlock();
            case 6: return new lBlock();
            default: throw new Error("Invalid tetromino type");
        }
    }
}

export { BlockFactory };
