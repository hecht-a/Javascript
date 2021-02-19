export class DFSRecursive {
	private connections: Record<number, Set<number>>;

	public constructor() {
		this.connections = {};
	}

	private addNode(node: number): void {
		this.connections[node] = new Set();
	}

	public addEdge(node1: number, node2: number): DFSRecursive {
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

	public DFSRecursive(node: number, value: number, visited = new Set()): boolean {
		if (node === value) {
			return true;
		}
		visited.add(node);
		for (const neighbor of this.connections[node]) {
			if (!visited.has(neighbor)) {
				if (this.DFSRecursive(neighbor, value, visited)) {
					return true;
				}
			}
		}
		return false;
	}
}
