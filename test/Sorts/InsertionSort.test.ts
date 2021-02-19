import { insertionSort } from "../../src/Sorts/InsertionSort";

describe(insertionSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(insertionSort(arr)).toStrictEqual(arr.sort());
	});
});
