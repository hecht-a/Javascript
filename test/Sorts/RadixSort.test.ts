import { radixSort } from "../../src/Sorts/RadixSort";

describe(radixSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(radixSort(arr)).toStrictEqual(arr.sort());
	});
});
