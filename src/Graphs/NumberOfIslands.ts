export class Islands {
	private matrixGrid: number[][];

	public constructor(matrixGrid: number[][]) {
		this.matrixGrid = matrixGrid;
	}

	private flood(row: number, col: number): void {
		if (row < 0 || col < 0) {
			return;
		}
		if (row >= this.matrixGrid.length || col >= this.matrixGrid[row].length) {
			return;
		}

		const tile = this.matrixGrid[row][col];
		if (tile !== 1) {
			return;
		}

		this.matrixGrid[row][col] = 0;

		this.flood(row + 1, col); // Down
		this.flood(row - 1, col); // Up
		this.flood(row, col + 1); // Right
		this.flood(row, col - 1); // Left
	}

	public count(): number {
		let counter = 0;
		for (let row = 0; row < this.matrixGrid.length; row += 1) {
			for (let col = 0; col < this.matrixGrid[row].length; col += 1) {
				const current = this.matrixGrid[row][col];
				if (current === 1) {
					this.flood(row, col);
					counter += 1;
				}
			}
		}
		return counter;
	}
}
