// export function dijkstraSmallestPath(
// 	graph: Record<string, Record<(string), number>>,
// 	start: string,
// ): Record<(string), number[][]> {
// 	const solutions: Record<(string), number[]|number[][]> = {};
// 	solutions[start][0] = [];
// 	solutions[start][1] = 0;

// 	while (true) {
// 		const p: number[][] = [];
// 		let neighbor: string;
// 		let dist = Infinity;

// 		for (const n in solutions[0]) {
// 			if (!solutions[0][n]) {
// 				continue;
// 			}
// 			const ndist = <number>solutions[1][0];
// 			const adj = [graph[n]];
// 			for (const a in adj) {
// 				if (solutions[0][Number(a)]) {
// 					continue;
// 				}
// 				const d = adj[0][a] + ndist;
// 				if (d < dist) {
// 					p[0] = solutions[n];
// 					neighbor = a;
// 					dist = d;
// 				}
// 			}
// 		}
// 		if (dist === Infinity) {
// 			break;
// 		}
// 		solutions[neighbor] = p?.concat(neighbor);
// 	}
// 	return { 1: [[1, 2, 3], [1]] };
// }
