import { Matrix } from "../../src/Linear-Algebra/Matrix";

describe("class Matrix", () => {
	describe("#component()", () => {
		it("should return the specified component", () => {
			const A = new Matrix(2, 2);
			expect(A.component(0, 1)).toStrictEqual(0);
			const B = new Matrix(2, 2, [
				[1, 2],
				[3, 4],
			]);
			expect(B.component(1, 0)).toStrictEqual(3);
		});
	});
	describe("#toString()", () => {
		it("should return a string representation of the matrix", () => {
			const A = new Matrix(2, 2, [
				[1, 2],
				[3, 4],
			]);
			expect(A.toString()).toStrictEqual("|1,2|\n|3,4|");
		});
	});
	describe("#dimension()", () => {
		it("should return the dimension of the matrix as number array", () => {
			const A = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			expect(A.dimension()[0]).toStrictEqual(3);
			expect(A.dimension()[1]).toStrictEqual(2);
		});
	});
	describe("#changeComponent()", () => {
		it("should change the specified component of the matrix", () => {
			const A = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			A.changeComponent(1, 0, 5);
			expect(A.component(1, 0)).toStrictEqual(5);
		});
	});
	describe("#equal()", () => {
		it("should compares the matrices", () => {
			const A = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			const B = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			const C = new Matrix(2, 2, [
				[1, 2],
				[3, 4],
			]);
			const D = new Matrix(2, 2, [
				[1, 2],
				[5, 4],
			]);
			expect(A.equal(B)).toBeTruthy();
			expect(A.equal(C)).toBeFalsy();
			expect(C.equal(D)).toBeFalsy();
		});
	});
	describe("#add()", () => {
		it("should return the result of the matrix addition", () => {
			const A = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			const B = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			const C = A.add(B);
			expect(C.component(1, 0)).toStrictEqual(6);
			expect(C.component(1, 1)).toStrictEqual(8);
			expect(C.component(0, 0)).toStrictEqual(2);
		});
	});
	describe("#scalar()", () => {
		it("should return the result of the matrix-scalar multiplication", () => {
			const A = new Matrix(3, 2, [
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			const B = A.scalar(2);
			const C = new Matrix(3, 2, [
				[2, 4],
				[6, 8],
				[10, 12],
			]);
			expect(B.equal(C)).toBeTruthy();
		});
	});
});
