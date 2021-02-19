import { randomVectorInt, unitBasisVector, Vector } from "../../src/Linear-Algebra/Vector";

describe("Create vectors", () => {
	describe("#toString()", () => {
		it("should return a string representation", () => {
			expect(new Vector(3, [1, 2, 3]).toString()).toStrictEqual("(1,2,3)");
		});
	});

	describe("#unitBasisVector()", () => {
		it("should return a unit basis vector", () => {
			expect(unitBasisVector(3, 1).toString()).toStrictEqual("(0,1,0)");
		});
	});
});

describe("Vector operations", () => {
	describe("#add", () => {
		it("should return vector (2,4,6)", () => {
			const x = new Vector(3, [1, 2, 3]);
			const y = new Vector(3, [1, 2, 3]);
			expect(x.add(y).toString()).toStrictEqual("(2,4,6)");
		});
	});
	describe("#sub()", () => {
		it("should return vector (0,0,0)", () => {
			const x = new Vector(3, [1, 2, 3]);
			const y = new Vector(3, [1, 2, 3]);
			expect((x.sub(y)).toString()).toStrictEqual("(0,0,0)");
		});
	});
	describe("#dot()", () => {
		it("should return the dot-product", () => {
			const x = new Vector(3, [1, 2, 3]);
			const y = new Vector(3, [5, 6, 7]);
			expect(x.dot(y)).toStrictEqual(38);
		});
	});
	describe("#scalar()", () => {
		it("should return the scalar product", () => {
			const x = new Vector(3, [1, 2, 3]);
			expect(x.scalar(2).toString()).toStrictEqual("(2,4,6)");
		});
	});
	describe("#norm()", () => {
		it("should return the normalizes vector", () => {
			const x = new Vector(4, [9, 0, 3, 1]);
			const y = x.norm();
			expect(Math.abs(y.component(0) - (9.0 / Math.sqrt(91))) <= 0.01).toBeTruthy();
		});
	});
	describe("#eulideanLength()", () => {
		it("should return the eulidean length of the vector", () => {
			const x = new Vector(3, [1, 2, 2]);
			expect(Math.abs(x.eulideanLength() - 3) <= 0.001).toBeTruthy();
		});
	});
	describe("#size()", () => {
		it("should return the size (not eulidean length!) of the vector", () => {
			const x = randomVectorInt(10, 1, 5);
			expect(x.size()).toStrictEqual(10);
		});
	});
	describe("#equal()", () => {
		it("should compares two vectors", () => {
			const x = new Vector(3, [1, 2, 2]);
			const y = new Vector(3, [1, 2, 3]);
			expect(x.equal(x)).toBeTruthy();
			expect(x.equal(y)).toBeFalsy();
		});
	});
});

describe("Methods on vectors", () => {
	describe("#component()", () => {
		it("should return the specified component", () => {
			const x = new Vector(3, [1, 2, 2]);
			expect(x.component(1)).toStrictEqual(2);
		});
	});
	describe("#changeComponent()", () => {
		it("should return the changed vector", () => {
			const x = new Vector(3, [1, 2, 2]);
			x.changeComponent(1, 5);
			expect(x.toString()).toStrictEqual("(1,5,2)");
		});
	});
	describe("#toString()", () => {
		it("should return a string representation of the vector", () => {
			const x = new Vector(4, [9, 0, 3, 1]);
			expect(x.toString()).toStrictEqual("(9,0,3,1)");
		});
	});
});
