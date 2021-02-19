export function density(nodes: number, edges: number, isDirected = false): number {
	const multi = isDirected
		? 1
		: 2;
	return (multi * edges) / (nodes * (nodes - 1));
}
