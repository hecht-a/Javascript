interface Edge {
	node1: number;
	node2: number
}

export class Graph {
	private edges: Edge[];

	constructor() {
		this.edges = [];
	}

	public addEdge(node1: number, node2: number): Graph {
		this.edges.push({ node1, node2 });
		return this;
	}

	public nodeNeighbors(node: number): Set<number> {
		const neighbors: Set<number> = new Set();
		for (const edge of this.edges) {
			if (edge.node1 === node && !(neighbors.has(edge.node2))) {
				neighbors.add(edge.node2);
			} else if (edge.node2 === node && !(neighbors.has(edge.node1))) {
				neighbors.add(edge.node1);
			}
		}
		return neighbors;
	}
}
