import { quickSort } from "../../src/Sorts/QuickSort";

describe(quickSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(quickSort(arr)).toStrictEqual(arr.sort());
	});
});
