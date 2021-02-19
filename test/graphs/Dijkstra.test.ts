import { Dijkstra } from "../../src/Graphs/Dijkstra";

describe(Dijkstra, () => {
	it("should", () => {
		const V = 9;
		const E = [
			[0, 1, 4],
			[0, 7, 8],
			[1, 7, 11],
			[1, 2, 8],
			[7, 8, 7],
			[6, 7, 1],
			[2, 8, 2],
			[6, 8, 6],
			[5, 6, 2],
			[2, 5, 4],
			[2, 3, 7],
			[3, 5, 14],
			[3, 4, 9],
			[4, 5, 10],
		];
		const res = [
			[0, -1], [4, 0],
			[12, 1], [19, 2],
			[21, 5], [11, 6],
			[9, 7], [8, 0],
			[14, 2],
		];
		expect(new Dijkstra(V, E).djikstra(0)).toStrictEqual(res);
	});
});
