class FourBlock {
    static generateBlock(): number[][] {
        return [
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ];
    }
}

class ThreeBlock {
    static generateBlock(): number[][] {
        const blockHash: number[] = [];
        const preBlock: number[] = [];

        // Generate block hash
        for (let i = 0; i < 4; i++) {
            blockHash.push(Math.floor(Math.random() * 6));
        }

        // Generate preBlock based on block hash
        for (let i = 0; i < 6; i++) {
            preBlock.push(blockHash.includes(i) ? 1 : 0);
        }

        // Split preBlock into two arrays
        return [preBlock.slice(0, 3), preBlock.slice(3)];
    }
}

class TwoBlock {
    static generateBlock(): number[][] {
        return [
            [1, 1],
            [1, 1]
        ];
    }
}

class BlockFactory {
    static dispenseBlock(blockType: string): number[][] {
        switch (blockType) {
            case 'four':
                return FourBlock.generateBlock();
            case 'three':
                return ThreeBlock.generateBlock();
            case 'two':
                return TwoBlock.generateBlock();
            default:
                throw new Error(`Unsupported block type: ${blockType}`);
        }
    }
}

