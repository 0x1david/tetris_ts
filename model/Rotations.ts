interface Rotation {
	rotate(board: Board, block: Block): Block;
	adjustCoordinates(block: Block): Block;

}

class NoRotation implements Rotation {
	public rotate(board: Board, block: Block): Block {
	return block;
  }
  	public adjustCoordinates(block: Block) {
  	   return block; 
  	}
}

class iRotation implements Rotation {
	protected _kernel = [2, 1, 0, -1];

	public rotate(board: Board, block: Block): Block {
	block = this.adjustCoordinates(block);
	block.angle = (block.angle + 1) % 4;
	return block;
  }

  	public adjustCoordinates(block: Block): Block {
    	if (block.angle === 2 || block.angle === 0) {
      		block.xcoords = block.xcoords.map((x, i) => x + this._kernel[i]);
		block.ycoords = block.ycoords.map((x, i) => x - this._kernel[i]);
    	} else {
      		block.xcoords = block.xcoords.map((x, i) => x - this._kernel[i]);
		block.ycoords = block.ycoords.map((x, i) => x + this._kernel[i]);
	
    }
    	return block;
  }
}

class jRotation implements Rotation {

}

5 -> 6 -> 9    + 1 + 3 - 3 - 1   
5 -> 7 -> 9    + 2 + 2 - 2 - 2
6 -> 7 -> 8    + 1 + 1 - 1 - 1
7 -> 7 -> 7    + 0 + 0 - 0 - 0
       
0,1,1,1
