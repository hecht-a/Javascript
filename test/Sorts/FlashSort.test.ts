import { flashSort } from "../../src/Sorts/FlashSort";

describe(flashSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(flashSort(arr)).toStrictEqual(arr.sort());
	});
});
