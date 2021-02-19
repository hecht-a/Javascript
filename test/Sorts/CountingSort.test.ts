import { countingSort } from "../../src/Sorts/CountingSort";

describe(countingSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(countingSort(arr)).toStrictEqual(arr.sort());
	});
});
