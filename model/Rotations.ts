class Rotation {
    public rotate(block: Block): Block {
        const kernels = [
            { x:  block._xKernel,  y:  block._yKernel },
            { x: -block._yKernel,  y:  block._xKernel },
            { x: -block._xKernel,  y: -block._yKernel },
            { x:  block._yKernel,  y: -block._xKernel }
        ];

        const kernel = kernels[block.angle];
        block.xcoords = block.xcoords.map((x, i) => x + kernel.x[i]);
        block.ycoords = block.ycoords.map((y, i) => y + kernel.y[i]);

        block.angle = (block.angle + 1) % 4;
        return block;
    }
}

