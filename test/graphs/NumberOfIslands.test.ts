import { Islands } from "../../src/Graphs/NumberOfIslands";

describe(Islands, () => {
	it("should count number of islands", () => {
		const grid = [
			[1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 1, 1],
		];
		const isl = new Islands(grid);
		expect(isl.count()).toStrictEqual(3);
	});

	it("should count number of islands", () => {
		const grid = [
			[1, 1, 0, 0, 1],
			[1, 1, 0, 0, 1],
			[0, 0, 1, 0, 0],
			[1, 1, 0, 1, 1],
		];
		const isl = new Islands(grid);
		expect(isl.count()).toStrictEqual(5);
	});
});
