export class ConnectedComponents {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private connections: Record<number, Set<string>>;

	public constructor() {
		this.connections = {};
	}

	private addNode(node: number): void {
		this.connections[node] = new Set();
	}

	public addEdge(node1: number, node2: number): ConnectedComponents {
		if (!(node1 in this.connections)) {
			this.addNode(node1);
		}
		if (!(node2 in this.connections)) {
			this.addNode(node2);
		}
		this.connections[node1].add(String(node2));
		this.connections[node2].add(String(node2));
		return this;
	}

	private DFSComponent(components: string[], node: string, visited: Set<string>): void {
		components.push(node);
		const stack = [node];
		while (stack.length > 0) {
			const curr = stack.pop();
			if (curr) {
				visited.add(curr.toString());
				for (const neighbour of this.connections[Number(curr)]) {
					if (!visited.has(neighbour.toString())) {
						stack.push(neighbour);
					}
				}
			}
		}
	}

	public connectedComponents(): string[] {
		const visited: Set<string> = new Set();
		const components: string[] = [];
		for (const node of Object.keys(this.connections)) {
			if (!visited.has(node.toString())) {
				this.DFSComponent(components, node, visited);
			}
		}

		return components;
	}
}
