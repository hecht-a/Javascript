import { timSort } from "../../src/Sorts/TimSort";

describe(timSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(timSort(arr)).toStrictEqual(arr.sort());
	});
});
