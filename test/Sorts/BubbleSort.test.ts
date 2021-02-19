import { bubbleSort, bubbleSortBis } from "../../src/Sorts/BubbleSort";

describe(bubbleSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(bubbleSort(arr)).toStrictEqual(arr.sort());
	});
});

describe(bubbleSortBis, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(bubbleSortBis(arr)).toStrictEqual(arr.sort());
	});
});
