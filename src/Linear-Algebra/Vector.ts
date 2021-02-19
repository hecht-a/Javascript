class Vector {
	private components: number[];

	public constructor(n: number, comps: number[] = []) {
		this.components = new Array(n);
		if (comps.length === 0) {
			for (let i = 0; i < n; i++) {
				this.components[i] = 0.0;
			}
		} else if (comps.length === n) {
			this.components = comps;
		} else {
			throw new Error("Vector: invalid size!");
		}
	}

	public size(): number {
		return this.components.length;
	}

	public eulideanLength(): number {
		return Math.sqrt(this.components.map((val) => val * val).reduce((acc, curr) => acc + curr));
	}

	public component(index: number): number {
		return this.components[index];
	}

	public changeComponent(index: number, value: number): void {
		if (index < 0 || index > this.size()) {
			console.log(index);
			throw new Error("changeComponent: index out of bounds!");
		}
		this.components[index] = value;
	}

	public add(newComponent: Vector): Vector {
		if (this.size() !== newComponent.size()) {
			throw new Error("add: vector must have same size!");
		}
		const size = this.size();
		const ans = new Vector(size);
		for (let i = 0; i < size; i++) {
			ans.changeComponent(i, (this.component(i) + newComponent.component(i)));
		}
		return ans;
	}

	public sub(newComponent: Vector): Vector {
		if (this.size() !== newComponent.size()) {
			throw new Error("sub: vector must have same size!");
		}
		const size = this.size();
		const ans = new Vector(size);
		for (let i = 0; i < size; i++) {
			ans.changeComponent(i, (this.component(i) - newComponent.component(i)));
		}
		return ans;
	}

	public dot(newComponent: Vector): number {
		if (this.size() !== newComponent.size()) {
			throw new Error("dot: vector must have same size!");
		}
		return this.components.map((val, i) => val * newComponent.component(i)).reduce((acc, curr) => acc + curr);
	}

	public scalar(value: number): Vector {
		const size = this.size();
		const ans = new Vector(size);
		for (let i = 0; i < size; i++) {
			ans.changeComponent(i, (this.component(i) * value));
		}
		return ans;
	}

	public toString(): string {
		let ans = "(";
		const size = this.size();
		for (let i = 0; i < size; i++) {
			ans += i < size - 1
				? `${this.components[i]},`
				: `${this.components[i]})`;
		}
		return ans;
	}

	public createUnitBasis(pos: number): Vector {
		const size = this.size();
		if (pos < 0 || pos > size) {
			throw new Error("createUnitBasis: index out of bounds!");
		}
		for (let i = 0; i < size; i++) {
			this.components[i] = i === pos
				? 1.0
				: 0.0;
		}
		return this;
	}

	public norm(): Vector {
		const size = this.size();
		const quotient = 1.0 / this.eulideanLength();
		for (let i = 0; i < size; i++) {
			this.components[i] *= quotient;
		}
		return this;
	}

	public equal(vector: Vector): boolean {
		const size = this.size();
		const epsilon = 0.001;
		if (size !== vector.size()) {
			return false;
		}
		for (let i = 0; i < size; i++) {
			if (Math.abs(this.component(i) - vector.component(i)) > epsilon) {
				return false;
			}
		}
		return true;
	}
}

function unitBasisVector(n: number, pos: number): Vector {
	const ans = new Vector(n);
	for (let i = 0; i < n; i++) {
		ans.changeComponent(i, i === pos
			? 1.0
			: 0.0);
	}
	return ans;
}

function randomVectorInt(n: number, a: number, b: number): Vector {
	const ans = new Vector(n);
	for (let i = 0; i < n; i++) {
		ans.changeComponent(i, Math.floor((Math.random() * b) + a));
	}
	return ans;
}

function randomVectorFloat(n: number, a: number, b: number): Vector {
	const ans = new Vector(n);
	for (let i = 0; i < n; i++) {
		ans.changeComponent(i, ((Math.random() * b) + a));
	}
	return ans;
}

export {
	Vector,
	unitBasisVector,
	randomVectorInt,
	randomVectorFloat,
};
