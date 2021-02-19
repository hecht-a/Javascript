import { ConnectedComponents } from "../../src/Graphs/ConnectedComponents";

describe(ConnectedComponents, () => {
	it("should print ['1', '3']", () => {
		const graph = new ConnectedComponents()
			.addEdge(1, 2) // Component 1
			.addEdge(3, 4) // Component 2
			.addEdge(3, 5); // Component 2
		expect(graph.connectedComponents()).toStrictEqual(["1", "3"]);
	});
});
