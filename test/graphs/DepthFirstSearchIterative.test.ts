import { DFSIterative } from "../../src/Graphs/DepthFirstSearchIterative";

describe(DFSIterative, () => {
	it("should", () => {
		const graph = new DFSIterative()
			.addEdge(1, 2)
			.addEdge(2, 3)
			.addEdge(2, 4)
			.addEdge(3, 5);

		expect(graph.DFSIterative(5, 1)).toBeTruthy();
		expect(graph.DFSIterative(5, 100)).toBeFalsy();
	});
});
