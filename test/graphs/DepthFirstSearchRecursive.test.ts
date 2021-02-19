import { DFSRecursive } from "../../src/Graphs/DepthFirstSearchRecursive";

describe(DFSRecursive, () => {
	it("should", () => {
		const graph = new DFSRecursive()
			.addEdge(1, 2)
			.addEdge(2, 3)
			.addEdge(2, 4)
			.addEdge(3, 5);

		expect(graph.DFSRecursive(5, 1)).toBeTruthy();
		expect(graph.DFSRecursive(5, 100)).toBeFalsy();
	});
});
