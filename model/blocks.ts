interface Block {
    getShape(): number[][];
    getColor(): string;
}

class iBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(0, 255, 255)";  // Cyan
    }
}

class oBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(255, 255, 0)";  // Yellow
    }
}

class tBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(128, 0, 128)";  // Purple
    }
}
class sBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(0, 255, 0)";  // Green
    }
}

class zBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(255, 0, 0)";  // Red
    }
}

class jBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(0, 0, 255)";  // Blue
    }
}

class lBlock implements Block {
    getShape(): number[][] {
        return [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 0]
        ];
    }

    getColor(): string {
        return "rgb(255, 165, 0)";  // Orange
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
