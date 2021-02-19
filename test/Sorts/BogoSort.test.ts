import { bogoSort } from "../../src/Sorts/BogoSort";

describe(bogoSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(bogoSort(arr)).toStrictEqual(arr.sort());
	});
});
