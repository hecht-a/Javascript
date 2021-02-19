export class Sudoku {
	private board: number[][];

	public constructor(board: number[][]) {
		this.board = board;
	}

	/**
	 * @returns number
	 */
	private findEmptyCell(): number[] {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (this.board[i][j] === 0) {
					return [j, i];
				}
			}
		}
		return [-1, -1];
	}

	/**
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} value
	 * @returns boolean
	 */
	private check(x: number, y: number, value: number): boolean {
		for (let i = 0; i < 9; i++) {
			if (this.board[i][x] === value || this.board[y][i] === value) {
				return false;
			}
		}

		const secRow = Math.floor(y / 3);
		const secCol = Math.floor(x / 3);
		for (let i = (secRow * 3); i < (secRow * 3) + 3; i++) {
			for (let j = (secCol * 3); j < (secCol * 3) + 3; j++) {
				if (y !== i && x !== j && this.board[i][j] === value) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * @returns boolean
	 */
	public solve(): boolean {
		const [x, y] = this.findEmptyCell();

		if (y === -1 && x === -1) {
			return true;
		}

		for (let val = 1; val < 10; val++) {
			if (this.check(x, y, val)) {
				this.board[y][x] = val;
				if (this.solve()) {
					return true;
				}
				this.board[y][x] = 0;
			}
		}
		return false;
	}

	/**
	 * @param  {number} row
	 * @param  {number} start
	 * @param  {number} end
	 * @returns number
	 */
	private getSection(row: number, start: number, end: number): number[] {
		return this.board[row].slice(start, end);
	}

	/**
	 * @returns number
	 */
	public getBoard(): number[][] {
		return this.board;
	}

	/**
	 * @returns void
	 */
	public printBoard(): void {
		for (let i = 0; i < 9; i++) {
			if (i % 3 === 0 && i !== 0) {
				console.log("- - - - - - - - - - - -");
			}
			console.log(
				...this.getSection(i, 0, 3), " | ",
				...this.getSection(i, 3, 6), " | ",
				...this.getSection(i, 6, 9),
			);
		}
	}
}
