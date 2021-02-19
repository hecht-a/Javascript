export class OpenKnightTour {
	size: number;

	board: number[][];

	constructor(size: number) {
		this.board = new Array(size).fill(0).map(() => new Array(size).fill(0));
		this.size = size;
	}

	getMoves(i: number, j: number): number[][] {
		const moves = [
			[i + 2, j - 1],
			[i + 2, j + 1],
			[i - 2, j - 1],
			[i - 2, j + 1],
			[i + 1, j - 2],
			[i + 1, j + 2],
			[i - 1, j - 2],
			[i - 1, j + 2],
		];

		return moves.filter(([y, x]) => y >= 0 && y < this.size && x >= 0 && x < this.size);
	}

	isComplete(): boolean {
		return !this.board.map((row: number[]) => row.includes(0)).includes(true);
	}

	solve(): boolean {
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				if (this.solveHelper(i, j, 0)) {
					return true;
				}
			}
		}
		return false;
	}

	solveHelper(i: number, j: number, curr: number): boolean {
		if (this.isComplete()) { return true; }

		for (const [y, x] of this.getMoves(i, j)) {
			if (this.board[y][x] === 0) {
				this.board[y][x] = curr + 1;
				if (this.solveHelper(y, x, curr + 1)) {
					return true;
				}
				this.board[y][x] = 0;
			}
		}
		return false;
	}

	getBoard(): number[][] {
		return this.board;
	}

	printBoard(): void {
		for (const row of this.board) {
			let string = "";
			for (const elem of row) {
				string += `${elem}\t`;
			}
			console.log(string);
		}
	}
}
