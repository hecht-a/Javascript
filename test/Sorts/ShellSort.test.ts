import { shellSort } from "../../src/Sorts/ShellSort";

describe(shellSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(shellSort(arr)).toStrictEqual(arr.sort());
	});
});
