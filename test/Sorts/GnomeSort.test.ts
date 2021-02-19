import { gnomeSort } from "../../src/Sorts/GnomeSort";

describe(gnomeSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(gnomeSort(arr)).toStrictEqual(arr.sort());
	});
});
