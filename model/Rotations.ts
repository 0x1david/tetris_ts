import { Block } from "./Blocks"
class Rotation {
    public rotate(block: Block): Block {
        const kernels = [
            { x:  block.xKernel,  y:  block.yKernel },
            { x: -block.yKernel,  y:  block.xKernel },
            { x: -block.xKernel,  y: -block.yKernel },
            { x:  block.yKernel,  y: -block.xKernel }
        ];

        const kernel = kernels[block.angle];
        block.xCoords = block.xCoords.map((x, i) => x + kernel.x[i]);
        block.yCoords = block.yCoords.map((y, i) => y + kernel.y[i]);

        block.rotationAngle = (block.rotationAngle + 1) % 4;
        return block;
    }
}

