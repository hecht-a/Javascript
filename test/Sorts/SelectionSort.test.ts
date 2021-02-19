import { selectionSort } from "../../src/Sorts/SelectionSort";

describe(selectionSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(selectionSort(arr)).toStrictEqual(arr.sort());
	});
});
