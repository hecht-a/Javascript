import { pigeonHoleSort } from "../../src/Sorts/PigeonHoleSort";

describe(pigeonHoleSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(pigeonHoleSort(arr)).toStrictEqual(arr.sort());
	});
});
