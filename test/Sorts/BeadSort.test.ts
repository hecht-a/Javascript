import { beadSort } from "../../src/Sorts/BeadSort";

describe(beadSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(beadSort(arr)).toStrictEqual(arr.sort());
	});
});
