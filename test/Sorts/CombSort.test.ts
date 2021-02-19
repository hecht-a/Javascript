import { combSort } from "../../src/Sorts/CombSort";

describe(combSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(combSort(arr)).toStrictEqual(arr.sort());
	});
});
