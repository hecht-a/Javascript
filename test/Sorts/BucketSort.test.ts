import { bucketSort } from "../../src/Sorts/BucketSort";

describe(bucketSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(bucketSort(arr)).toStrictEqual(arr.sort());
	});
});
