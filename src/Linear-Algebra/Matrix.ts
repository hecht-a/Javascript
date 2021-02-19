export class Matrix {
	private matrix: number[][];

	private rows: number;

	private cols: number;

	constructor(row: number, col: number, comps: number[][] = []) {
		if (comps.length === 0) {
			this.matrix = [];
			let rowVector = [];
			for (let i = 0; i < row; i++) {
				for (let j = 0; j < col; j++) {
					rowVector[j] = 0;
				}
				this.matrix[i] = rowVector;
				rowVector = [];
			}
		} else {
			this.matrix = comps;
		}
		this.rows = row;
		this.cols = col;
	}

	public component(x: number, y: number): number {
		if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
			return this.matrix[x][y];
		}
		throw new Error("component: index out of bounds");
	}

	public changeComponent(x: number, y: number, value: number): void {
		if (x < 0 || x > this.rows || y < 0 || y > this.cols) {
			throw new Error("changeComponent: index out of bounds");
		}
		this.matrix[x][y] = value;
	}

	public toString(): string {
		let ans = "";
		for (let i = 0; i < this.rows; i++) {
			ans += "|";
			for (let j = 0; j < this.cols; j++) {
				if (j < this.cols - 1) {
					ans += `${this.matrix[i][j]},`;
				} else if (i < this.rows - 1) {
					ans += `${this.matrix[i][j]}|\n`;
				} else {
					ans += `${this.matrix[i][j]}|`;
				}
			}
		}
		return ans;
	}

	public dimension(): number[] {
		return [this.rows, this.cols];
	}

	public add(newMatrix: Matrix): Matrix {
		if (this.dimension()[0] !== newMatrix.dimension()[0] || this.dimension()[1] !== newMatrix.dimension()[1]) {
			throw new Error("add: matrices must have same dimension!");
		}
		const ans = new Matrix(this.rows, this.cols);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				ans.changeComponent(i, j, (this.component(i, j) + newMatrix.component(i, j)));
			}
		}
		return ans;
	}

	public equal(newMatrix: Matrix): boolean {
		const epsilon = 0.001;
		if (this.dimension()[0] !== newMatrix.dimension()[0] || this.dimension()[1] !== newMatrix.dimension()[1]) {
			return false;
		}
		for (let i = 0; i < this.dimension()[0]; i++) {
			for (let j = 0; j < this.dimension()[1]; j++) {
				if (Math.abs(this.component(i, j) - newMatrix.component(i, j)) > epsilon) {
					 return false;
				}
			}
		}
		return true;
	}

	public scalar(value: number): Matrix {
		const ans = new Matrix(this.dimension()[0], this.dimension()[1]);
		for (let i = 0; i < this.dimension()[0]; i++) {
			for (let j = 0; j < this.dimension()[1]; j++) {
				ans.changeComponent(i, j, (this.component(i, j) * value));
			}
		}
		return ans;
	}
}
