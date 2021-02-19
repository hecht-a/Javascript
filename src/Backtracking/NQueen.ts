export class NQueen {
	board: string[][];

	size: number;

	constructor(size: number) {
		this.board = new Array(size).fill(".").map(() => new Array(size).fill("."));
		this.size = size;
	}

	isValid(row: number, col: number): boolean {
		for (let i = 0; i < col; i++) {
			if (this.board[row][i] === "Q") {
				return false;
			}
		}

		for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
			if (this.board[i][j] === "Q") {
				return false;
			}
		}

		for (let i = row, j = col; j >= 0 && i < this.size; i++, j--) {
			if (this.board[i][j] === "Q") {
				return false;
			}
		}

		return true;
	}

	solve(col = 0): boolean {
		if (col >= this.size) {
			return true;
		}

		for (let i = 0; i < this.size; i++) {
			if (this.isValid(i, col)) {
				this.board[i][col] = "Q";

				if (this.solve(col + 1)) {
					return true;
				}
				this.board[i][col] = ".";
			}
		}

		return false;
	}

	getBoard(): string[][] {
		return this.board;
	}

	printBoard(): void {
		for (const row of this.board) {
			console.log(...row);
		}
	}
}
