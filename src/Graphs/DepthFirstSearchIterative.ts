export class DFSIterative {
	private connections: Record<number, Set<number>>;

	public constructor() {
		this.connections = {};
	}

	private addNode(node: number): void {
		this.connections[node] = new Set();
	}

	public addEdge(node1: number, node2: number): DFSIterative {
		if (!(node1 in this.connections)) {
			this.addNode(node1);
		}
		if (!(node2 in this.connections)) {
			this.addNode(node2);
		}
		this.connections[node1].add(node2);
		this.connections[node2].add(node1);
		return this;
	}

	DFSIterative(node: number, value: number): boolean {
		const stack = [node];
		const visited = new Set();
		while (stack.length > 0) {
			const currNode = stack.pop();
			if (currNode === value) {
				return true;
			}
			visited.add(currNode);
			for (const neighbour of this.connections[(currNode as number)]) {
				if (!visited.has(neighbour)) {
					stack.push(neighbour);
				}
			}
		}
		return false;
	}
}
