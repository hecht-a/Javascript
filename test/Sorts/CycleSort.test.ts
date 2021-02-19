import { cycleSort } from "../../src/Sorts/CycleSort";

describe(cycleSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(cycleSort(arr)).toStrictEqual(arr.sort());
	});
});
