import { Graph } from "../../src/Graphs/NodeNeighbors";

describe(Graph, () => {
	it("should print [2, 5]", () => {
		const graph = new Graph()
			.addEdge(1, 2)
			.addEdge(2, 3)
			.addEdge(3, 5)
			.addEdge(1, 5);
		expect(graph.nodeNeighbors(1)).toStrictEqual(new Set().add(2).add(5));
	});
});
