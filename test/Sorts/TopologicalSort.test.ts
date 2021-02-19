import { heapSortV1, heapSortV2 } from "../../src/Sorts/heapSort/HeapSort";

describe(heapSortV1, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(heapSortV1(arr)).toStrictEqual(arr.sort());
	});
});

describe(heapSortV2, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(heapSortV2(arr)).toStrictEqual(arr.sort());
	});
});
